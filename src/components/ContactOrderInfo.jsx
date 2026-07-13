import ImagePlaceholder from "./ImagePlaceholder";
import { HeartIcon } from "./icons";

const HOURS = [
	{ day: "Monday – Friday", time: "9:00am – 6:00pm" },
	{ day: "Saturday", time: "10:00am – 4:00pm" },
	{ day: "Sunday", time: "Closed" },
];

function ContactOrderInfo() {
	return (
		<section className="bg-sand">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
				<div className="grid gap-12 lg:grid-cols-2">
					<div>
						<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
							<span>HOW TO ORDER</span>
							<HeartIcon className="h-3.5 w-3.5 text-brown" />
						</div>

						<h2 className="mt-4 font-display text-3xl leading-tight text-brown">
							Ordering is easy.
						</h2>

						<p className="mt-4 max-w-md text-brown/70">
							Send us a message on Instagram or through the contact form
							with your order details, and we&apos;ll confirm your pickup or
							delivery time.
						</p>

						<div className="mt-6 flex items-center gap-3">
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream">
								<ImagePlaceholder
									width={20}
									height={20}
									label="20×20"
									className="h-5 w-5"
								/>
							</div>
							<a
								href="#"
								className="text-sm font-medium tracking-[0.05em] text-brown"
							>
								Message us on Instagram
							</a>
						</div>
					</div>

					<div>
						<h3 className="font-display text-lg text-brown">Kitchen Hours</h3>
						<div className="mt-4 divide-y divide-brown/10 border-t border-brown/10">
							{HOURS.map((hour) => (
								<div
									key={hour.day}
									className="flex items-center justify-between py-3 text-sm"
								>
									<span className="text-brown">{hour.day}</span>
									<span className="text-brown/60">{hour.time}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactOrderInfo;
