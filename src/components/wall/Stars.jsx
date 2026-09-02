const STAR_PATH =
	"M8 1.2l2 4.1 4.5.65-3.25 3.17.77 4.48L8 11.48l-4.02 2.12.77-4.48L1.5 5.95 6 5.3z";

function Stars({ rating = 5 }) {
	return (
		<div
			role="img"
			aria-label={`${rating} out of 5 stars`}
			className="flex items-center gap-1 text-brown"
		>
			{Array.from({ length: rating }, (_, index) => (
				<svg
					// biome-ignore lint/suspicious/noArrayIndexKey: fixed decorative row
					key={index}
					viewBox="0 0 16 16"
					aria-hidden="true"
					className="size-3.5 fill-current"
				>
					<path d={STAR_PATH} />
				</svg>
			))}
		</div>
	);
}

export default Stars;
