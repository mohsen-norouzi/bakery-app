export const UNIT_PRICE = 5;

export const PRICE_PACKS = [
	{ quantity: 1, price: 5 },
	{ quantity: 2, price: 9.5, was: 10 },
	{ quantity: 4, price: 18.5, was: 20 },
	{ quantity: 6, price: 26.5, was: 30 },
	{ quantity: 8, price: 35.5, was: 40 },
	{ quantity: 10, price: 45, was: 50 },
];

export const FLAVOR_SURCHARGES = {
	"Cardamom & Pistachio": 0.5,
};

function toCents(euros) {
	return Math.round(euros * 100);
}

function fromCents(cents) {
	return cents / 100;
}

export function formatEuro(amount) {
	const rounded = fromCents(toCents(amount));
	const formatted = Number.isInteger(rounded)
		? String(rounded)
		: rounded.toFixed(2);
	return `€${formatted}`;
}

export function getFlavorPrice(name) {
	return UNIT_PRICE + (FLAVOR_SURCHARGES[name] ?? 0);
}

export function getPackPrice(quantity) {
	if (quantity <= 0) return 0;

	const min = Array(quantity + 1).fill(Number.POSITIVE_INFINITY);
	min[0] = 0;

	for (let n = 1; n <= quantity; n += 1) {
		for (const pack of PRICE_PACKS) {
			if (pack.quantity <= n) {
				min[n] = Math.min(min[n], min[n - pack.quantity] + toCents(pack.price));
			}
		}
	}

	return fromCents(min[quantity]);
}

export function getNextPack(count) {
	return PRICE_PACKS.find((pack) => pack.quantity > count) ?? null;
}

export function getPackSave(pack) {
	if (pack.was == null) return 0;
	return fromCents(Math.max(0, toCents(pack.was) - toCents(pack.price)));
}

export function getQuote(items = []) {
	const count = items.reduce((total, item) => total + item.quantity, 0);
	const surcharge = fromCents(
		items.reduce((total, item) => {
			const extra = FLAVOR_SURCHARGES[item.name] ?? 0;
			return total + toCents(extra) * item.quantity;
		}, 0),
	);
	const packPrice = getPackPrice(count);
	const was = fromCents(toCents(count * UNIT_PRICE) + toCents(surcharge));
	const saved = fromCents(
		Math.max(0, toCents(count * UNIT_PRICE) - toCents(packPrice)),
	);
	const total = fromCents(toCents(packPrice) + toCents(surcharge));

	return { count, packPrice, surcharge, total, was, saved };
}
