import ImagePlaceholder from "./ImagePlaceholder";
import { ArrowRightIcon, HeartIcon, InstagramIcon } from "./icons";

const PHOTOS = [1, 2, 3, 4, 5];

function InstagramFeed() {
	return (
		<section className="bg-sand">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
				<div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:items-center lg:gap-10">
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

						<div className="mt-6 flex items-center gap-2 text-brown">
							<InstagramIcon className="h-5 w-5" />
							<span className="text-sm font-medium tracking-[0.05em]">
								@BAVOBAKES
							</span>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
							{PHOTOS.map((photo) => (
								<ImagePlaceholder
									key={photo}
									width={300}
									height={380}
									label="300×380"
									className="rounded-xl"
								/>
							))}
						</div>

						<div className="mt-8 text-center">
							<a
								href="#"
								className="inline-flex items-center gap-2 border-b border-brown/40 pb-1 text-xs font-medium tracking-[0.15em] text-brown"
							>
								VIEW MORE ON INSTAGRAM
								<ArrowRightIcon className="h-4 w-4" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default InstagramFeed;
