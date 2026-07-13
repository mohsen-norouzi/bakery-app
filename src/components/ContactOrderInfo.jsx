import { useCart } from "../context/CartContext";
import { buildWhatsAppOrderUrl } from "../lib/whatsapp";
import { HeartIcon, WhatsappIcon } from "./icons";

function ContactOrderInfo() {
	const { items } = useCart();

	return (
		<section className="bg-sand">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
				<div className="max-w-xl">
					<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
						<span>HOW TO ORDER</span>
						<HeartIcon className="h-3.5 w-3.5 text-brown" />
					</div>

					<h2 className="mt-4 font-display text-3xl leading-tight text-brown">
						Ordering is easy.
					</h2>

					<p className="mt-4 max-w-md text-brown/70">
						Send us a message on WhatsApp with your order details, and
						we&apos;ll confirm your pickup or delivery time.
					</p>

					<div className="mt-6 flex items-center gap-3">
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream">
							<WhatsappIcon className="h-5 w-5 text-brown" />
						</div>
						<a
							href={buildWhatsAppOrderUrl(items)}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm font-medium tracking-wider text-brown"
						>
							Message us on WhatsApp
						</a>
					</div>

					<p className="mt-4 text-sm text-brown/60">
						Not on WhatsApp? Email{" "}
						<a
							href="mailto:hello@bavobakes.com"
							className="text-brown underline underline-offset-2"
						>
							hello@bavobakes.com
						</a>{" "}
						or{" "}
						<a
							href="https://instagram.com/bavobakes"
							target="_blank"
							rel="noopener noreferrer"
							className="text-brown underline underline-offset-2"
						>
							DM us on Instagram
						</a>
						.
					</p>
				</div>
			</div>
		</section>
	);
}

export default ContactOrderInfo;
