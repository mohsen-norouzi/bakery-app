import ImagePlaceholder from "./ImagePlaceholder";
import { HeartIcon } from "./icons";

const PACKAGING_FEATURES = [
	"Gift-ready packaging",
	"Personal note available",
	"Carefully wrapped with love",
];

function BeautifullyPackaged() {
	return (
		<section className="bg-sand">
			<div className="grid lg:grid-cols-2">
				<ImagePlaceholder
					width={1200}
					height={900}
					label="1200×900"
					className="h-full min-h-[420px] w-full"
				/>

				<div className="flex flex-col justify-center px-6 py-16 lg:px-16 lg:py-24">
					<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
						<span>BEAUTIFULLY PACKAGED</span>
						<HeartIcon className="h-3.5 w-3.5 text-brown" />
					</div>

					<h2 className="mt-4 font-display text-4xl leading-tight text-brown">
						Made to give,
						<br />
						<span className="italic">made to remember.</span>
					</h2>

					<div className="mt-6 h-px w-16 bg-brown/30" />

					<p className="mt-6 max-w-md text-brown/70">
						Every order comes in our signature packaging, perfect for gifts
						(or keeping for yourself).
					</p>

					<div className="mt-10 flex flex-wrap gap-8">
						{PACKAGING_FEATURES.map((feature) => (
							<div key={feature} className="flex items-center gap-3">
								<ImagePlaceholder
									width={24}
									height={24}
									label="24×24"
									className="h-6 w-6 shrink-0"
								/>
								<span className="max-w-[7rem] text-sm text-brown">
									{feature}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default BeautifullyPackaged;
