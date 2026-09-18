import DeliveryPickup from "../components/DeliveryPickup";
import FeaturedCookies from "../components/FeaturedCookies";
import Footer from "../components/Footer";
import HalloweenBox from "../components/HalloweenBox";
import HalloweenCollection from "../components/HalloweenCollection";
import { Sparkle } from "../components/HalloweenDecor";
import Hero from "../components/Hero";
import InstagramFeed from "../components/InstagramFeed";
import OurStory from "../components/OurStory";

function Home() {
	return (
		<>
			<main id="main-content">
				<Hero />
				<div className="season-ribbon">
					<span>HOMEMADE IN BARCELONA</span>
					<Sparkle />
					<span>A LITTLE SPOOKY, A LOT OF SWEET</span>
					<Sparkle />
					<span>BAKED TO ORDER</span>
					<Sparkle />
					<span>MADE FOR SHARING</span>
				</div>
				<HalloweenCollection />
				<HalloweenBox />
				<FeaturedCookies />
				<OurStory />
				<DeliveryPickup />
				<InstagramFeed />
			</main>
			<Footer />
		</>
	);
}
export default Home;
