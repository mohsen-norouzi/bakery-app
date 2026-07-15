import Reveal from "./Reveal";
import RevealStagger from "./RevealStagger";
import { ArrowRightIcon, HeartIcon, InstagramIcon } from "./icons";

const PHOTOS = [
	{ src: "/img/cookie-gallery/stack.webp", alt: "Stack of freshly baked cookies" },
	{ src: "/img/cookie-gallery/gift.webp", alt: "Cookies wrapped as a gift" },
	{ src: "/img/cookie-gallery/box.webp", alt: "Box of assorted cookies" },
	{ src: "/img/cookie-gallery/bag.webp", alt: "Cookies in a paper bag" },
	{ src: "/img/cookie-gallery/plate.webp", alt: "Cookie served on a plate" },
];

function InstagramFeed() {
	return (
		<section className="bg-sand">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
				<div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:items-center lg:gap-10">
					<Reveal>
						<div>
							<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
								<span>FOLLOW OUR JOURNEY</span>
								<HeartIcon className="h-3.5 w-3.5 text-brown" />
							</div>

							<h2 className="mt-4 font-display text-4xl leading-tight text-brown">
								From our kitchen
								<br />
								<span className="italic">to your home.</span>
							</h2>

							<p className="mt-4 text-brown/70">
								A glimpse of our daily bakes, beautiful packaging, and the
								moments you share with our cookies.
							</p>

							<a
								href="https://instagram.com/bavobakes"
								target="_blank"
								rel="noopener noreferrer"
								className="mt-6 inline-flex items-center gap-2 text-brown"
							>
								<InstagramIcon className="h-5 w-5" />
								<span className="text-sm font-medium tracking-[0.05em]">
									BAVOBAKES
								</span>
							</a>
						</div>
					</Reveal>

					<div>
						<RevealStagger
							className="grid grid-cols-3 gap-4 sm:grid-cols-5"
							stagger={120}
							delay={100}
						>
							{PHOTOS.map((photo) => (
								<img
									key={photo.src}
									src={photo.src}
									alt={photo.alt}
									width={300}
									height={380}
									loading="lazy"
									className="aspect-30/38 w-full rounded-xl object-cover"
								/>
							))}
						</RevealStagger>

						<Reveal delay={280} className="mt-8 text-center">
							<a
								href="https://instagram.com/bavobakes"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 border-b border-brown/40 pb-1 text-xs font-medium tracking-[0.15em] text-brown"
							>
								VIEW MORE ON INSTAGRAM
								<ArrowRightIcon className="h-4 w-4" />
							</a>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	);
}

export default InstagramFeed;
