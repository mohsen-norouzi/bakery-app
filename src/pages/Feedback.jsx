import FeedbackWall from "../components/FeedbackWall";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

function Feedback() {
	return (
		<>
			<FeedbackWall />

			<Reveal>
				<Footer />
			</Reveal>
		</>
	);
}

export default Feedback;
