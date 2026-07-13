import "./App.css";
import BeautifullyPackaged from "./components/BeautifullyPackaged";
import DeliveryPickup from "./components/DeliveryPickup";
import FeaturedCookies from "./components/FeaturedCookies";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import OurStory from "./components/OurStory";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
	return (
		<div className="bg-cream font-sans">
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
			<WhyChooseUs />
			<HowItWorks />
			<BeautifullyPackaged />
			<DeliveryPickup />
		</div>
	);
}

export default App;
