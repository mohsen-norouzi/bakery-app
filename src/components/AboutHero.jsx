import Button from "./Button";
import HeroCurve from "./HeroCurve";
import { ArrowRightIcon, HeartIcon } from "./icons";

function AboutHero() {
	return (
		<section className="relative flex min-h-0 flex-1 flex-col">
			<div className="mx-auto w-full max-w-7xl min-h-0 flex-1 px-6 py-12 sm:py-16 lg:px-10 lg:py-24">
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
						Bavo Bakes began in a small kitchen with a simple goal — to bake
						cookies that bring people joy and create sweet moments worth
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

			<HeroCurve />
		</section>
	);
}

export default AboutHero;
