import Button from "./Button";
import ImagePlaceholder from "./ImagePlaceholder";
import { ArrowRightIcon, HeartIcon } from "./icons";

function AboutHero() {
	return (
		<section className="relative isolate overflow-hidden">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
				<div className="max-w-xl">
					<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
						<span>OUR STORY</span>
						<HeartIcon className="h-3.5 w-3.5 text-brown" />
					</div>

					<h1 className="mt-6 flex items-start gap-4 font-display text-5xl leading-[1.15] text-brown sm:text-6xl">
						<span>
							Baked with love.
							<br />
							<span className="italic">Made for you.</span>
						</span>
						<HeartIcon className="mt-2 hidden h-8 w-8 shrink-0 text-brown/30 sm:block" />
					</h1>

					<div className="mt-6 h-px w-16 bg-brown/30" />

					<p className="mt-6 max-w-md text-brown/70">
						Sweet from Home began in a small kitchen with a simple goal — to
						bake cookies that bring people joy and create sweet moments worth
						sharing.
					</p>

					<p className="mt-4 max-w-md text-brown/70">
						Every cookie we make is crafted with care, using real ingredients
						and time-honored recipes.
					</p>

					<Button variant="solid" className="mt-8">
						OUR STORY
						<ArrowRightIcon className="h-4 w-4" />
					</Button>
				</div>
			</div>

			<svg
				viewBox="0 0 1440 120"
				preserveAspectRatio="none"
				className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full text-cream sm:h-24"
				aria-hidden="true"
			>
				<path
					d="M0 60 C 360 130 1080 -10 1440 60 L1440 120 L0 120 Z"
					fill="currentColor"
				/>
			</svg>

			<ImagePlaceholder
				width={140}
				height={140}
				label="140×140"
				className="absolute bottom-0 left-1/2 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full sm:h-28 sm:w-28"
			/>
		</section>
	);
}

export default AboutHero;
