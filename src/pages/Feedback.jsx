import CtaBanner from "../components/CtaBanner";
import FeedbackWall from "../components/FeedbackWall";
import Footer from "../components/Footer";
import QuotePrice from "../components/QuotePrice";
import Reveal from "../components/Reveal";
import { useCart } from "../context/CartContext";
import { buildWhatsAppOrderUrl } from "../lib/whatsapp";

function Feedback() {
	const { items, itemCount, quote } = useCart();

	return (
		<>
			<FeedbackWall />

			<Reveal>
				<CtaBanner
					heading="Ready to taste it yourself?"
					highlight="Your box is waiting."
					subtext="Every note on this wall started with a first box. Pick your flavors and we'll bake them fresh for you."
					primaryLabel="BROWSE COOKIES"
					primaryTo="/cookies"
					secondaryLabel={
						itemCount > 0 ? (
							<>
								ORDER NOW
								<QuotePrice quote={quote} />
							</>
						) : (
							"ORDER NOW"
						)
					}
					secondaryTo={buildWhatsAppOrderUrl(items)}
					align="left"
				/>
			</Reveal>

			<Reveal>
				<Footer />
			</Reveal>
		</>
	);
}

export default Feedback;
