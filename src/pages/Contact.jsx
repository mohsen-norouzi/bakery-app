import ContactHero from "../components/ContactHero";
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

			<Footer />
		</>
	);
}

export default Contact;
