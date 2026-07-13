import Button from "./Button";
import ImagePlaceholder from "./ImagePlaceholder";
import { ArrowRightIcon } from "./icons";

function CtaBanner() {
	return (
		<section className="relative isolate overflow-hidden bg-sand">
			<ImagePlaceholder
				width={1920}
				height={480}
				label="1920×480 background (mascot + heart line + paper texture)"
				className="absolute inset-0 -z-10 h-full w-full"
			/>

			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
				<div className="ml-auto max-w-lg lg:pr-16">
					<h2 className="font-display text-3xl leading-tight text-brown sm:text-4xl">
						Ready to enjoy our homemade cookies?
					</h2>
					<p className="mt-3 text-brown/70">
						Baked fresh to order and delivered with love.
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-4">
						<Button variant="solid">
							ORDER NOW
							<ArrowRightIcon className="h-4 w-4" />
						</Button>
						<Button variant="outline">VIEW GIFT BOXES</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CtaBanner;
