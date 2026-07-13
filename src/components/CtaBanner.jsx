import Button from "./Button";
import { ArrowRightIcon } from "./icons";

function CtaBanner({
	heading,
	highlight,
	subtext,
	primaryLabel,
	secondaryLabel,
	primaryTo,
	secondaryTo,
	align = "right",
	backgroundSrc = "/img/cta-bg.png",
}) {
	return (
		<section className="relative isolate overflow-hidden bg-sand">
			{backgroundSrc && (
				<img
					src={backgroundSrc}
					alt=""
					aria-hidden="true"
					className="absolute inset-0 -z-10 h-full w-full object-cover"
				/>
			)}

			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
				<div
					className={`max-w-lg ${align === "right" ? "ml-auto lg:pr-16" : ""}`}
				>
					<h2 className="font-display text-3xl leading-tight text-brown sm:text-4xl">
						{heading}
						{highlight && (
							<>
								<br />
								<span className="italic">{highlight}</span>
							</>
						)}
					</h2>
					<p className="mt-3 text-brown/70">{subtext}</p>

					<div className="mt-8 flex flex-wrap items-center gap-4">
						<Button variant="solid" to={primaryTo}>
							{primaryLabel}
							<ArrowRightIcon className="h-4 w-4" />
						</Button>
						<Button variant="outline" to={secondaryTo}>
							{secondaryLabel}
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CtaBanner;
