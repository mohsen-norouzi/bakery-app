import ContactSection from "../components/ContactSection";
import CookiesCatalog from "../components/CookiesCatalog";
import CookiesHero from "../components/CookiesHero";
import CtaBanner from "../components/CtaBanner";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImagePlaceholder from "../components/ImagePlaceholder";

function Cookies() {
	return (
		<>
			<div className="relative isolate">
				<ImagePlaceholder
					width={1920}
					height={1080}
					label="1920×1080 background"
					className="absolute inset-0 -z-10 h-full w-full"
				/>
				<Header />
				<CookiesHero />
			</div>

			<CookiesCatalog />
			<CtaBanner
				heading="Baked fresh."
				highlight="Just for you."
				subtext="Place your order today and enjoy homemade cookies, baked with love."
				primaryLabel="ORDER NOW"
				secondaryLabel="SHOP GIFT BOXES"
				align="left"
			/>
			<FaqSection />
			<ContactSection />
			<Footer />
		</>
	);
}

export default Cookies;
