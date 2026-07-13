import ImagePlaceholder from "./ImagePlaceholder";
import { HeartIcon } from "./icons";

const FEATURES = [
	{
		title: "Real Ingredients",
		description:
			"We use only the finest, real ingredients — no preservatives, no shortcuts.",
	},
	{
		title: "Made in Small Batches",
		description:
			"Every batch is baked with care to ensure the perfect taste and freshness.",
	},
	{
		title: "Made with Love",
		description:
			"From our kitchen to your door, each cookie is made to spread love and happiness.",
	},
	{
		title: "Perfect for Sharing",
		description:
			"Beautifully packaged and perfect for gifting, celebrating, or simply treating yourself.",
	},
];

function AboutFeatures() {
	return (
		<section className="bg-cream">
			<div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-10 lg:py-24">
				<div className="flex items-center justify-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
					<span>WHAT MAKES US SPECIAL</span>
					<HeartIcon className="h-3.5 w-3.5 text-brown" />
				</div>

				<h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-brown">
					Quality ingredients. Thoughtful baking.
					<br />
					<span className="italic">Meaningful moments.</span>
				</h2>

				<div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-brown/15">
					{FEATURES.map((feature) => (
						<div key={feature.title} className="lg:px-8">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sand">
								<ImagePlaceholder
									width={28}
									height={28}
									label="28×28"
									className="h-7 w-7"
								/>
							</div>

							<h3 className="mt-5 font-display text-lg text-brown">
								{feature.title}
							</h3>
							<p className="mt-2 text-sm text-brown/60">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default AboutFeatures;
