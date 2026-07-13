import DeliveryPickup from "../components/DeliveryPickup";
import FeaturedCookies from "../components/FeaturedCookies";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import InstagramFeed from "../components/InstagramFeed";
import OurStory from "../components/OurStory";

function Home() {
	return (
		<>
			<div className="relative isolate min-h-screen">
				<img
					src="/img/hero-1.png"
					alt=""
					aria-hidden="true"
					className="absolute inset-0 -z-10 h-full w-full object-cover"
				/>
				<Header />
				<Hero />
			</div>

			<FeaturedCookies />
			<OurStory />
			<DeliveryPickup />
			<InstagramFeed />
			<Footer />
		</>
	);
}

export default Home;
