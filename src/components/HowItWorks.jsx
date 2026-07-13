import ImagePlaceholder from "./ImagePlaceholder";
import { HeartIcon } from "./icons";

const STEPS = [
	{
		title: "Choose Your Cookies",
		description: "Pick your favorites or create a custom box.",
	},
	{
		title: "Place Your Order",
		description: "Send us your order through Instagram DM or the contact form.",
	},
	{
		title: "Freshly Baked",
		description: "We bake everything fresh to order, just for you.",
	},
	{
		title: "Pickup or Delivery",
		description: "Pick up in Les Corts or enjoy local delivery across Barcelona.",
	},
];

function HowItWorks() {
	return (
		<section className="bg-cream">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
				<div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-center lg:gap-10">
					<div>
						<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
							<span>HOW IT WORKS</span>
							<HeartIcon className="h-3.5 w-3.5 text-brown" />
						</div>

						<h2 className="mt-4 font-display text-4xl leading-tight text-brown">
							Freshly baked,
							<br />
							<span className="italic">made simple.</span>
						</h2>

						<div className="mt-6 h-px w-16 bg-brown/30" />

						<p className="mt-6 text-brown/70">
							From your order to your door (or hands), we take care of the
							rest.
						</p>
					</div>

					<div className="relative grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 sm:gap-10">
						<div className="pointer-events-none absolute inset-x-0 top-14 hidden border-t border-dashed border-brown/25 sm:block" />

						{STEPS.map((step, index) => (
							<div
								key={step.title}
								className="relative flex flex-col items-center text-center"
							>
								<div className="flex h-28 w-full items-center justify-center rounded-t-full bg-sand">
									<ImagePlaceholder
										width={28}
										height={28}
										label="28×28"
										className="h-7 w-7"
									/>
								</div>
								<span className="relative z-10 -mt-4 flex h-8 w-8 items-center justify-center rounded-full border border-brown/30 bg-cream text-xs font-medium text-brown">
									{index + 1}
								</span>
								<h3 className="mt-4 font-display text-base text-brown">
									{step.title}
								</h3>
								<p className="mt-2 text-sm text-brown/60">
									{step.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default HowItWorks;
