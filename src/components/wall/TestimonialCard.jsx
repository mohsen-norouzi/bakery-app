import PaperClip from "./decor/PaperClip";
import WashiTape from "./decor/WashiTape";
import { PAPERS } from "./papers";
import TestimonialBody from "./TestimonialBody";

/** Puts one testimonial on the paper its data asks for, and pins it up. */
function TestimonialCard({
	style = "plain",
	tape,
	clip = false,
	name,
	city,
	rating,
	quote,
	avatar,
}) {
	const Paper = PAPERS[style] ?? PAPERS.plain;

	return (
		<div className="relative">
			{tape && <WashiTape placement={tape} />}
			{clip && <PaperClip />}

			<Paper>
				<TestimonialBody
					name={name}
					city={city}
					rating={rating}
					quote={quote}
					avatar={avatar}
				/>
			</Paper>
		</div>
	);
}

export default TestimonialCard;
