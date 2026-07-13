import ImagePlaceholder from "./ImagePlaceholder";
import { HeartIcon } from "./icons";

const FEATURES = [
	{
		title: "Quality Ingredients",
		description: "We use real butter, premium chocolate, and natural ingredients.",
	},
	{
		title: "Baked to Order",
		description: "Every cookie is baked fresh just for you, never in bulk, never frozen.",
	},
	{
		title: "Small Batches",
		description: "We keep our batches small to ensure the best quality in every bite.",
	},
	{
		title: "Made with Love",
		description:
			"From our kitchen in Barcelona to your hands, with love in every step.",
	},
];

function WhyChooseUs() {
	return (
		<section className="bg-cream">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
				<div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-10">
					<div>
						<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
							<span>WHY CHOOSE US</span>
							<HeartIcon className="h-3.5 w-3.5 text-brown" />
						</div>

						<h2 className="mt-4 font-display text-4xl leading-tight text-brown">
							Cookies made
							<br />
							<span className="italic">the right way.</span>
						</h2>
					</div>

					<div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:divide-x xl:divide-brown/15">
						{FEATURES.map(({ title, description }) => (
							<div key={title} className="xl:px-8 xl:first:pl-0">
								<ImagePlaceholder
									width={28}
									height={28}
									label="28×28"
									className="h-7 w-7 rounded-md"
								/>
								<h3 className="mt-4 font-display text-lg text-brown">
									{title}
								</h3>
								<p className="mt-2 text-sm text-brown/60">{description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhyChooseUs;
