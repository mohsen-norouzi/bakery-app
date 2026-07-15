import ContactHero from "../components/ContactHero";
import ContactOrderInfo from "../components/ContactOrderInfo";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

function Contact() {
	return (
		<>
			<PageHero src="/img/contact-bg.webp" tall>
				<ContactHero />
			</PageHero>

			<FaqSection />
			<Reveal>
				<ContactOrderInfo />
			</Reveal>
			<Reveal>
				<Footer />
			</Reveal>
		</>
	);
}

export default Contact;
