import TestimonialCard from "./TestimonialCard";
import { ArrowLeftIcon, ArrowRightIcon, HeartIcon } from "./icons";

const TESTIMONIALS = [
	{
		quote:
			"The best cookies in Barcelona! You can taste the quality and the love in every bite.",
		name: "Maria S.",
		location: "Barcelona",
	},
	{
		quote:
			"Beautifully packaged and absolutely delicious. Perfect for gifting!",
		name: "James L.",
		location: "London",
	},
	{
		quote: "Fresh, soft, and full of flavor. My go-to for every special occasion.",
		name: "Clara R.",
		location: "Barcelona",
	},
];

function Testimonials() {
	return (
		<section className="bg-cream">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
				<div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-center lg:gap-10">
					<div>
						<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
							<span>WHAT OUR CUSTOMERS SAY</span>
							<HeartIcon className="h-3.5 w-3.5 text-brown" />
						</div>

						<h2 className="mt-4 font-display text-4xl leading-tight text-brown">
							Baked with love,
							<br />
							<span className="italic">loved by you.</span>
						</h2>

						<p className="mt-4 text-brown/70">
							Thank you for making Sweet from Home part of your sweetest
							moments.
						</p>

						<a
							href="#"
							className="mt-8 inline-flex items-center gap-2 border-b border-brown/40 pb-1 text-xs font-medium tracking-[0.15em] text-brown"
						>
							READ MORE REVIEWS
							<ArrowRightIcon className="h-4 w-4" />
						</a>
					</div>

					<div>
						<div className="grid gap-6 md:grid-cols-3">
							{TESTIMONIALS.map((testimonial) => (
								<TestimonialCard key={testimonial.name} {...testimonial} />
							))}
						</div>

						<div className="mt-6 hidden justify-end gap-3 md:flex">
							<button
								type="button"
								aria-label="Previous testimonial"
								className="flex h-10 w-10 items-center justify-center rounded-full border border-brown/30 text-brown transition-colors hover:bg-brown/5"
							>
								<ArrowLeftIcon className="h-4 w-4" />
							</button>
							<button
								type="button"
								aria-label="Next testimonial"
								className="flex h-10 w-10 items-center justify-center rounded-full border border-brown/30 text-brown transition-colors hover:bg-brown/5"
							>
								<ArrowRightIcon className="h-4 w-4" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
