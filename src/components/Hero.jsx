import Button from "./Button";
import MadeWithLoveBadge from "./MadeWithLoveBadge";
import Reveal from "./Reveal";
import RevealStagger from "./RevealStagger";
import { ArrowDownIcon, ArrowRightIcon } from "./icons";

function Hero() {
	return (
		<section>
			<div className="relative mx-auto max-w-7xl px-6 py-10 sm:py-12 lg:px-10 lg:py-20">
				<Reveal
					variant="fade"
					delay={550}
					className="absolute top-4 right-4 hidden w-20 text-brown sm:block sm:w-24 lg:top-10 lg:right-10 lg:w-28"
				>
					<MadeWithLoveBadge className="animate-spin-slow w-full" />
				</Reveal>

				<RevealStagger stagger={130} delay={220} className="flex max-w-xl flex-col">
					<div className="flex items-center gap-2 text-sm font-light tracking-[0.2em] text-brown/70">
						<span>FRESHLY BAKED</span>
						<img
							src="/img/heart-filled.png"
							alt=""
							aria-hidden="true"
							className="h-3.5 w-3.5"
						/>
					</div>

					<h1 className="mt-6 font-display text-4xl leading-[1.15] text-brown sm:text-5xl lg:text-6xl">
						Homemade Cookies,
						<br />
						<span className="text-tan italic">Made with Love</span>
						<br />
						<span className="italic">in Barcelona.</span>
					</h1>

					<div className="mt-8 h-px w-16 bg-brown/30" />

					<p className="mt-8 max-w-md text-brown/70">
						Crafted in small batches using quality ingredients, beautifully
						wrapped and baked to order.
					</p>

					<div className="mt-10 flex flex-wrap items-center gap-4">
						<Button variant="solid" to="/cookies">
							VIEW COOKIES
							<ArrowRightIcon className="h-4 w-4" />
						</Button>
						<Button variant="outline" to="/contact">
							HOW IT WORKS
						</Button>
					</div>
				</RevealStagger>
			</div>

			<Reveal
				delay={900}
				className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/60 sm:flex lg:bottom-10"
			>
				<span>SCROLL</span>
				<span>DOWN</span>
				<ArrowDownIcon className="h-4 w-4" />
			</Reveal>
		</section>
	);
}

export default Hero;
