import ContactHero from "../components/ContactHero";
import ContactOrderInfo from "../components/ContactOrderInfo";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

function Contact() {
	return (
		<>
			<PageHero src="/img/contact-bg.png" tall>
				<ContactHero />
			</PageHero>

			<FaqSection />
			<ContactOrderInfo />
			<Footer />
		</>
	);
}

export default Contact;
