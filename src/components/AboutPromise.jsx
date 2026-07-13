import ImagePlaceholder from "./ImagePlaceholder";
import { HeartIcon } from "./icons";

const PROMISES = [
	{
		title: "Quality You Can Trust",
		description: "We use premium ingredients and bake with the highest standards.",
	},
	{
		title: "Happiness in Every Bite",
		description: "Our cookies are made to bring joy to your everyday moments.",
	},
	{
		title: "Customer Care We Love",
		description:
			"We're here for you, always ready to make your experience special.",
	},
];

function AboutPromise() {
	return (
		<section className="bg-sand">
			<div className="grid lg:grid-cols-2">
				<div className="flex flex-col justify-center px-6 py-16 lg:px-16 lg:py-24">
					<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
						<span>OUR PROMISE TO YOU</span>
						<HeartIcon className="h-3.5 w-3.5 text-brown" />
					</div>

					<p className="mt-4 max-w-md font-display text-2xl leading-snug text-brown">
						We are committed to creating cookies that not only taste
						delicious but also make you feel special. Thank you for
						supporting our small business and being a part of our story.
					</p>

					<div className="mt-8 divide-y divide-brown/10 border-t border-brown/10">
						{PROMISES.map((promise) => (
							<div key={promise.title} className="flex items-start gap-4 py-5">
								<ImagePlaceholder
									width={24}
									height={24}
									label="24×24"
									className="h-6 w-6 shrink-0"
								/>
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
					</div>
				</div>

				<ImagePlaceholder
					width={1200}
					height={1000}
					label="1200×1000"
					className="h-full min-h-[420px] w-full"
				/>
			</div>
		</section>
	);
}

export default AboutPromise;
