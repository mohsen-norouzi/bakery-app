import ImagePlaceholder from "./ImagePlaceholder";
import { ArrowRightIcon } from "./icons";

function ContactSection() {
	return (
		<section className="relative isolate overflow-hidden bg-sand">
			<ImagePlaceholder
				width={1920}
				height={280}
				label="1920×280 background (leaves + floor shadow)"
				className="absolute inset-0 -z-10 h-full w-full"
			/>

			<div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
				<div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<h2 className="font-display text-2xl text-brown">
							Still have questions?
						</h2>
						<p className="mt-1 text-sm text-brown/70">
							We usually reply within a day.
						</p>
					</div>

					<a
						href="#"
						className="inline-flex items-center gap-2 border-b border-brown/40 pb-1 text-xs font-medium tracking-[0.15em] text-brown"
					>
						EMAIL US
						<ArrowRightIcon className="h-4 w-4" />
					</a>
				</div>
			</div>
		</section>
	);
}

export default ContactSection;
