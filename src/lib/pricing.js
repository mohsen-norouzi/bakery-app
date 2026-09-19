import { ALL_PRODUCTS } from "./cookies.js";

export const UNIT_PRICE = 4;

export const PRICE_PACKS = [
	{ quantity: 1, discount: 0 },
	{ quantity: 2, discount: 0.5 },
	{ quantity: 4, discount: 1.5 },
	{ quantity: 6, discount: 3.5 },
	{ quantity: 8, discount: 4.5 },
	{ quantity: 10, discount: 5 },
].map(({ quantity, discount }) => {
	// Keep the existing box savings when the individual cookie price changes.
	const originalCents = toCents(UNIT_PRICE) * quantity;
	return {
		quantity,
		price: fromCents(originalCents - toCents(discount)),
		was: fromCents(originalCents),
	};
});

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
	const product = ALL_PRODUCTS.find((cookie) => cookie.name === name);
	if (product?.price != null) return product.price;
	return UNIT_PRICE + (FLAVOR_SURCHARGES[name] ?? 0);
}

export function isCookieItem(name) {
	const product = ALL_PRODUCTS.find((cookie) => cookie.name === name);
	return product?.kind !== "brownie";
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

export function formatCartContents({ cookieCount = 0, brownieCount = 0 }) {
	const parts = [];
	if (cookieCount > 0) {
		parts.push(`${cookieCount} ${cookieCount === 1 ? "cookie" : "cookies"}`);
	}
	if (brownieCount > 0) {
		parts.push(
			`${brownieCount} ${brownieCount === 1 ? "brownie" : "brownies"}`,
		);
	}
	return parts.join(" · ");
}

export function getQuote(items = []) {
	let cookieCount = 0;
	let brownieCount = 0;
	let surcharge = 0;
	let brownieTotal = 0;

	for (const item of items) {
		if (isCookieItem(item.name)) {
			cookieCount += item.quantity;
			surcharge += (getFlavorPrice(item.name) - UNIT_PRICE) * item.quantity;
		} else {
			brownieCount += item.quantity;
			brownieTotal += getFlavorPrice(item.name) * item.quantity;
		}
	}

	surcharge = fromCents(toCents(surcharge));
	brownieTotal = fromCents(toCents(brownieTotal));

	const packPrice = getPackPrice(cookieCount);
	const saved = fromCents(
		Math.max(0, toCents(cookieCount * UNIT_PRICE) - toCents(packPrice)),
	);
	const total = fromCents(
		toCents(packPrice) + toCents(surcharge) + toCents(brownieTotal),
	);
	const was = fromCents(
		toCents(cookieCount * UNIT_PRICE) +
			toCents(surcharge) +
			toCents(brownieTotal),
	);

	return {
		count: cookieCount + brownieCount,
		cookieCount,
		brownieCount,
		packPrice,
		surcharge,
		total,
		was,
		saved,
	};
}
