import CookiesCatalog from "../components/CookiesCatalog";
import CookiesHero from "../components/CookiesHero";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroBackground from "../components/HeroBackground";
import { useCart } from "../context/CartContext";
import { buildWhatsAppOrderUrl } from "../lib/whatsapp";

function Cookies() {
	const { items, itemCount } = useCart();

	return (
		<>
			<div className="relative isolate overflow-hidden bg-cream">
				<HeroBackground src="/img/cookies-bg.png" align="right" />
				<Header />
				<CookiesHero />
			</div>

			<CookiesCatalog />
			<CtaBanner
				heading="Not sure what to pick?"
				highlight="We're happy to help."
				subtext="Send us a message and we'll help you find your perfect box of cookies."
				primaryLabel="CONTACT US"
				primaryTo="/contact"
				secondaryLabel={`ORDER NOW${itemCount > 0 ? ` (${itemCount})` : ""}`}
				secondaryTo={buildWhatsAppOrderUrl(items)}
				align="left"
			/>
			<Footer />
		</>
	);
}

export default Cookies;
