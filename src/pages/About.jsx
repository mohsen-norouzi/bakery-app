import AboutFeatures from "../components/AboutFeatures";
import AboutHero from "../components/AboutHero";
import AboutPromise from "../components/AboutPromise";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroBackground from "../components/HeroBackground";

function About() {
	return (
		<>
			<div className="relative isolate overflow-hidden bg-cream">
				<HeroBackground src="/img/about-bg.png" />
				<Header />
				<AboutHero />
			</div>

			<AboutFeatures />
			<AboutPromise />
			<Footer />
		</>
	);
}

export default About;
