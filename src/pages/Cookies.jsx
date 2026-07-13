import CookiesCatalog from "../components/CookiesCatalog";
import CookiesHero from "../components/CookiesHero";
import CtaBanner from "../components/CtaBanner";
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
				heading="Not sure what to pick?"
				highlight="We're happy to help."
				subtext="Send us a message and we'll help you find your perfect box of cookies."
				primaryLabel="CONTACT US"
				primaryTo="/contact"
				secondaryLabel="ORDER NOW"
				align="left"
			/>
			<Footer />
		</>
	);
}

export default Cookies;
