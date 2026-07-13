import BeautifullyPackaged from "../components/BeautifullyPackaged";
import CtaBanner from "../components/CtaBanner";
import DeliveryPickup from "../components/DeliveryPickup";
import FeaturedCookies from "../components/FeaturedCookies";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import InstagramFeed from "../components/InstagramFeed";
import OurStory from "../components/OurStory";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

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
			<WhyChooseUs />
			<HowItWorks />
			<BeautifullyPackaged />
			<DeliveryPickup />
			<Testimonials />
			<InstagramFeed />
			<CtaBanner
				heading="Ready to enjoy our homemade cookies?"
				subtext="Baked fresh to order and delivered with love."
				primaryLabel="ORDER NOW"
				secondaryLabel="VIEW GIFT BOXES"
			/>
			<Footer />
		</>
	);
}

export default Home;
