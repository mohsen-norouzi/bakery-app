import ContactHero from "../components/ContactHero";
import ContactOrderInfo from "../components/ContactOrderInfo";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImagePlaceholder from "../components/ImagePlaceholder";

function Contact() {
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
				<ContactHero />
			</div>

			<ContactOrderInfo />
			<FaqSection />
			<Footer />
		</>
	);
}

export default Contact;
