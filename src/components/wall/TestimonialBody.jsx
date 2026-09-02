import Monogram from "./Monogram";
import Stars from "./Stars";

/**
 * The contents of every quote, whatever paper it sits on: rating, quote,
 * and who said it. No paper styling lives here.
 */
function TestimonialBody({ name, city, rating, quote, avatar }) {
	return (
		<figure className="m-0 flex flex-col gap-4">
			<div className="flex items-start justify-between gap-4">
				<Stars rating={rating} />
				<span
					aria-hidden="true"
					className="-mt-3 font-display text-3xl leading-none text-brown/45"
				>
					&rdquo;
				</span>
			</div>

			<blockquote className="m-0 text-[15px] leading-relaxed text-brown/85">
				{quote}
			</blockquote>

			<figcaption className="mt-1 flex items-center gap-3 border-t border-brown/10 pt-4">
				<Monogram name={name} src={avatar} />
				<span className="min-w-0">
					<span className="block text-sm font-semibold text-brown">{name}</span>
					<span className="block text-xs text-brown/60">{city}</span>
				</span>
			</figcaption>
		</figure>
	);
}

export default TestimonialBody;
