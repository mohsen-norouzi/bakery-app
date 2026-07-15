const WHATSAPP_NUMBER = "666611091";

export function buildWhatsAppOrderUrl(items = []) {
	let message = "Hi Bavo! I'd like to place an order";

	if (items.length > 0) {
		const summary = items
			.map((item) => `${item.quantity}x ${item.name}`)
			.join(", ");
		message += ` for: ${summary}.`;
	} else {
		message += ".";
	}

	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
