import Reveal from "./Reveal";
import RevealStagger from "./RevealStagger";
import { HeadsetIcon, HeartIcon, ShieldCheckIcon, SmileyIcon } from "./icons";

const PROMISES = [
	{
		title: "Quality You Can Trust",
		description: "We use premium ingredients and bake with the highest standards.",
		icon: ShieldCheckIcon,
	},
	{
		title: "Happiness in Every Bite",
		description: "Our cookies are made to bring joy to your everyday moments.",
		icon: SmileyIcon,
	},
	{
		title: "Customer Care We Love",
		description:
			"We're here for you, always ready to make your experience special.",
		icon: HeadsetIcon,
	},
];

function AboutPromise() {
	return (
		<section className="relative overflow-hidden bg-sand">
			<img
				src="/img/our-promise-bg.webp"
				alt=""
				aria-hidden="true"
				className="absolute inset-0 hidden h-full w-full object-cover object-right sm:block"
			/>
			<div
				aria-hidden="true"
				className="absolute inset-0 hidden bg-gradient-to-r from-sand/95 via-sand/75 to-sand/20 sm:block lg:from-sand lg:from-50% lg:via-sand/70 lg:via-70% lg:to-transparent"
			/>

			<div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
				<div className="max-w-md">
					<Reveal>
						<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
							<span>OUR PROMISE TO YOU</span>
							<HeartIcon className="h-3.5 w-3.5 text-brown" />
						</div>

						<p className="mt-4 font-display text-2xl leading-snug text-brown">
							We are committed to creating cookies that not only taste
							delicious but also make you feel special. Thank you for
							supporting our small business and being a part of our story.
						</p>
					</Reveal>

					<RevealStagger
						className="mt-8 divide-y divide-brown/10 border-t border-brown/10"
						stagger={140}
						delay={150}
					>
						{PROMISES.map((promise) => (
							<div key={promise.title} className="flex items-start gap-4 py-5">
								<promise.icon className="h-6 w-6 shrink-0 text-brown" />
								<div>
									<h3 className="font-display text-base text-brown">
										{promise.title}
									</h3>
									<p className="mt-1 text-sm text-brown/60">
										{promise.description}
									</p>
								</div>
							</div>
						))}
					</RevealStagger>
				</div>
			</div>
		</section>
	);
}

export default AboutPromise;
