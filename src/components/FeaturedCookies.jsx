import { Link } from "react-router-dom";
import CookieCard from "./CookieCard";
import Reveal from "./Reveal";
import RevealStagger from "./RevealStagger";
import { ArrowRightIcon, HeartIcon } from "./icons";

const COOKIES = [
	{
		name: "Chocolate Chip",
		description: "Classic, soft, and loaded with chocolate.",
	},
	{
		name: "Double Chocolate",
		description: "Rich cocoa dough with double the chocolate.",
	},
	{
		name: "Chocolate Sea Salt",
		description: "Rich chocolate with a touch of sea salt.",
	},
	{
		name: "White Chocolate Macadamia",
		description: "Buttery cookies with white chocolate and macadamia.",
		available: false,
	},
];

function FeaturedCookies() {
	return (
		<section className="bg-cream">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
				<div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-10">
					<Reveal>
						<div>
							<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
								<span>FEATURED COOKIES</span>
								<HeartIcon className="h-3.5 w-3.5 text-brown" />
							</div>

							<h2 className="mt-4 font-display text-4xl leading-tight text-brown">
								Our Most Loved Cookies
							</h2>

							<p className="mt-4 text-brown/70">
								Baked fresh to order using the finest ingredients. One bite and
								you&apos;ll taste the love.
							</p>

							<Link
								to="/cookies"
								className="mt-8 inline-flex items-center gap-2 border-b border-brown/40 pb-1 text-xs font-medium tracking-[0.15em] text-brown"
							>
								VIEW ALL COOKIES
								<ArrowRightIcon className="h-4 w-4" />
							</Link>
						</div>
					</Reveal>

					<RevealStagger
						className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
						stagger={160}
						delay={120}
					>
						{COOKIES.map((cookie) => (
							<CookieCard key={cookie.name} {...cookie} />
						))}
					</RevealStagger>
				</div>
			</div>
		</section>
	);
}

export default FeaturedCookies;
