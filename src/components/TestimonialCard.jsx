import ImagePlaceholder from "./ImagePlaceholder";

function TestimonialCard({ quote, name, location }) {
	return (
		<div className="rounded-2xl bg-sand p-6">
			<span className="font-display text-4xl leading-none text-brown/30">
				&ldquo;
			</span>

			<div className="mt-2 text-sm tracking-widest text-brown">★★★★★</div>

			<p className="mt-3 text-sm text-brown/80">{quote}</p>

			<div className="mt-6 flex items-center justify-between border-t border-brown/10 pt-4">
				<div>
					<p className="text-xs font-medium tracking-[0.1em] text-brown">
						{name.toUpperCase()}
					</p>
					<p className="mt-0.5 text-xs text-brown/50">{location}</p>
				</div>
				<ImagePlaceholder
					width={40}
					height={40}
					label="40×40"
					className="h-10 w-10 shrink-0 rounded-full"
				/>
			</div>
		</div>
	);
}

export default TestimonialCard;
