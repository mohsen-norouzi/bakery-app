import RevealStagger from "./RevealStagger";
import { ArrowRightIcon, HeartIcon } from "./icons";

function CookiesHero() {
	return (
		<section className="relative flex min-h-0 flex-1 flex-col">
			<div className="mx-auto flex w-full max-w-7xl min-h-0 flex-1 flex-col px-6 py-12 sm:py-16 lg:px-10 lg:py-24">
				<RevealStagger stagger={130} delay={220} className="flex max-w-xl flex-col">
					<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
						<span>OUR COOKIES</span>
						<HeartIcon className="h-3.5 w-3.5 text-brown" />
					</div>

					<h1 className="mt-6 font-display text-5xl leading-[1.15] text-brown sm:text-6xl">
						Freshly baked.
						<br />
						<span className="italic">Made to love.</span>
					</h1>

					<p className="mt-8 max-w-md text-brown/70">
						Discover our handmade cookies, baked fresh to order using real
						ingredients and lots of love.
					</p>

					<a
						href="#"
						className="mt-8 inline-flex items-center gap-2 self-start border-b border-brown/40 pb-1 text-xs font-medium tracking-[0.15em] text-brown"
					>
						HOW IT WORKS
						<ArrowRightIcon className="h-4 w-4" />
					</a>
				</RevealStagger>
			</div>
		</section>
	);
}

export default CookiesHero;
