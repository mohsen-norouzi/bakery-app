import AboutFeatures from "../components/AboutFeatures";
import AboutHero from "../components/AboutHero";
import AboutPromise from "../components/AboutPromise";
import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
	return (
		<>
			<div className="relative isolate">
				<img
					src="/img/about-bg.png"
					alt=""
					aria-hidden="true"
					className="absolute inset-0 -z-10 h-full w-full object-cover"
				/>
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
