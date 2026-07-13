import AboutFeatures from "../components/AboutFeatures";
import AboutHero from "../components/AboutHero";
import AboutPromise from "../components/AboutPromise";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImagePlaceholder from "../components/ImagePlaceholder";

function About() {
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
				<AboutHero />
			</div>

			<AboutFeatures />
			<AboutPromise />
			<Footer />
		</>
	);
}

export default About;
