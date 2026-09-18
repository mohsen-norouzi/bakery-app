import CookiesCatalog from "../components/CookiesCatalog";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";
import HalloweenCollection from "../components/HalloweenCollection";
import { Sparkle } from "../components/HalloweenDecor";

import QuotePrice from "../components/QuotePrice";
import Reveal from "../components/Reveal";
import { useCart } from "../context/CartContext";
import { buildWhatsAppOrderUrl } from "../lib/whatsapp";

function Cookies() {
	const { items, itemCount, quote } = useCart();

	return (
		<>
			<section className="season-shop-intro">
				<img
					src="/img/halloween/autumn-kitchen.webp"
					alt=""
					aria-hidden="true"
				/>
				<div className="season-container">
					<p className="season-eyebrow">
						<Sparkle /> FRESH FROM THE OVEN
					</p>
					<h1>
						Pick your treats.
						<br />
						<em>Find your favourites.</em>
					</h1>
					<p>
						A little Halloween magic, plus the classics you love. Handmade in
						Barcelona and baked to order.
					</p>
					<a className="season-text-link" href="#classics">
						Browse the classic cookies ↓
					</a>
				</div>
			</section>
			<HalloweenCollection />

			<CookiesCatalog />
			<Reveal>
				<CtaBanner
					heading="Not sure what to pick?"
					highlight="We're happy to help."
					subtext="Send us a message and we'll help you find your perfect box of cookies."
					primaryLabel="CONTACT US"
					primaryTo="/contact"
					secondaryLabel={
						itemCount > 0 ? (
							<>
								ORDER NOW
								<QuotePrice quote={quote} />
							</>
						) : (
							"ORDER NOW"
						)
					}
					secondaryTo={buildWhatsAppOrderUrl(items)}
					align="left"
				/>
			</Reveal>
			<Reveal>
				<Footer />
			</Reveal>
		</>
	);
}

export default Cookies;
