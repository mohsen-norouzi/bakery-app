import { ArrowRightIcon, HeartIcon } from "./icons";

function OurStory() {
	return (
		<section className="relative isolate overflow-hidden bg-sand">
			<img
				src="/img/our-story.png"
				alt=""
				aria-hidden="true"
				className="absolute inset-0 -z-10 hidden h-full w-full object-cover md:block"
			/>

			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
				<div className="max-w-md">
					<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
						<span>OUR STORY</span>
						<HeartIcon className="h-3.5 w-3.5 text-brown" />
					</div>

					<h2 className="mt-4 font-display text-4xl leading-tight text-brown">
						Made with love,
						<br />
						<span className="italic">from our home to yours.</span>
					</h2>

					<p className="mt-4 text-brown/70">
						Bavo Bakes started in a small kitchen in Barcelona with one
						simple goal: to bake cookies that make people smile.
					</p>

					<a
						href="#"
						className="mt-8 inline-flex items-center gap-2 border-b border-brown/40 pb-1 text-xs font-medium tracking-[0.15em] text-brown"
					>
						READ OUR STORY
						<ArrowRightIcon className="h-4 w-4" />
					</a>
				</div>
			</div>
		</section>
	);
}

export default OurStory;
