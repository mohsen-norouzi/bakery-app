import AboutFeatures from "../components/AboutFeatures";
import AboutHero from "../components/AboutHero";
import AboutPromise from "../components/AboutPromise";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

function About() {
	return (
		<>
			<PageHero src="/img/about-bg.webp">
				<AboutHero />
			</PageHero>

			<AboutFeatures />
			<AboutPromise />
			<Reveal>
				<Footer />
			</Reveal>
		</>
	);
}

export default About;
