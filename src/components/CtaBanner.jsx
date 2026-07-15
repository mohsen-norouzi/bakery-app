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
	backgroundSrc = "/img/cta-bg.webp",
}) {
	const textOnLeft = align === "left";

	const copy = (
		<div className="max-w-lg">
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
	);

	return (
		<section className="overflow-hidden bg-sand">
			{/* Mobile: solid sand, no background image */}
			<div className="px-6 py-16 lg:hidden">{copy}</div>

			{/* Desktop: split with side fade */}
			<div className="hidden lg:grid lg:grid-cols-2 lg:items-stretch">
				{textOnLeft ? (
					<>
						<div className="flex flex-col justify-center px-12 py-24 xl:px-16">
							{copy}
						</div>
						{backgroundSrc && (
							<div className="relative min-h-[28rem]">
								<img
									src={backgroundSrc}
									alt=""
									aria-hidden="true"
									className="absolute inset-0 h-full w-full object-cover object-[75%_38%]"
								/>
								<div
									aria-hidden="true"
									className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-sand via-sand/70 to-transparent"
								/>
							</div>
						)}
					</>
				) : (
					<>
						{backgroundSrc && (
							<div className="relative min-h-[28rem]">
								<img
									src={backgroundSrc}
									alt=""
									aria-hidden="true"
									className="absolute inset-0 h-full w-full object-cover object-[25%_38%]"
								/>
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-sand via-sand/70 to-transparent"
								/>
							</div>
						)}
						<div className="flex flex-col justify-center px-12 py-24 xl:px-16">
							{copy}
						</div>
					</>
				)}
			</div>
		</section>
	);
}

export default CtaBanner;
