import NotePaper from "./NotePaper";
import TestimonialBody from "./TestimonialBody";

/** One quote, written on the note its data asks for. */
function TestimonialCard({ note, name, city, rating, quote, avatar }) {
	return (
		<NotePaper note={note}>
			<TestimonialBody
				name={name}
				city={city}
				rating={rating}
				quote={quote}
				avatar={avatar}
			/>
		</NotePaper>
	);
}

export default TestimonialCard;
