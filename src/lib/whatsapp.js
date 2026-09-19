import { formatCartContents, formatEuro, getQuote } from "./pricing.js";

const WHATSAPP_NUMBER = "34666611091";

export function buildWhatsAppEnquiryUrl(treat) {
	const message = `Hi Bavo! I'd love to know more about ${treat} from your Halloween collection. Could you share the flavours, ingredients, prices and availability?`;
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppOrderUrl(items = []) {
	let message = "Hi Bavo! I'd like to place an order";

	if (items.length > 0) {
		const summary = items
			.map(
				(item) =>
					`${item.quantity}x ${item.name}${item.vegan ? " (vegan)" : ""}`,
			)
			.join(", ");
		const quote = getQuote(items);
		const contents = formatCartContents(quote);

		message += ` for: ${summary}.\n\n${contents} — ${formatEuro(quote.total)}`;
		if (quote.saved > 0) {
			message += ` (was ${formatEuro(quote.was)})`;
		}
		message += ".";
	} else {
		message += ".";
	}

	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
