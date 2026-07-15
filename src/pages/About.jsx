import AboutFeatures from "../components/AboutFeatures";
import AboutHero from "../components/AboutHero";
import AboutPromise from "../components/AboutPromise";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

function About() {
	return (
		<>
			<PageHero src="/img/about-bg.png">
				<AboutHero />
			</PageHero>

			<AboutFeatures />
			<AboutPromise />
			<Footer />
		</>
	);
}

export default About;
