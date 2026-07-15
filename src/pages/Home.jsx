import DeliveryPickup from "../components/DeliveryPickup";
import FeaturedCookies from "../components/FeaturedCookies";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroBackground from "../components/HeroBackground";
import InstagramFeed from "../components/InstagramFeed";
import OurStory from "../components/OurStory";
import Reveal from "../components/Reveal";

function Home() {
	return (
		<>
			<div className="relative isolate min-h-screen overflow-hidden bg-cream">
				<HeroBackground src="/img/hero-1.png" />
				<Header />
				<Hero />
			</div>

			<FeaturedCookies />
			<Reveal>
				<OurStory />
			</Reveal>
			<DeliveryPickup />
			<InstagramFeed />
			<Reveal>
				<Footer />
			</Reveal>
		</>
	);
}

export default Home;
