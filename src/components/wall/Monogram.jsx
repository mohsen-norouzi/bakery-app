function getInitials(name) {
	return name
		.split(/\s+/)
		.map((part) => part[0])
		.join("")
		.replace(/\./g, "")
		.slice(0, 2)
		.toUpperCase();
}

/**
 * Stands in for a customer photo. Drop a real one in by passing `src`
 * (add an `avatar` field in lib/testimonials).
 */
function Monogram({ name, src }) {
	if (src) {
		return (
			<img
				src={src}
				alt=""
				width={40}
				height={40}
				loading="lazy"
				className="size-10 shrink-0 rounded-full object-cover"
			/>
		);
	}

	return (
		<span
			aria-hidden="true"
			className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sand text-[11px] font-semibold tracking-[0.08em] text-brown/70"
		>
			{getInitials(name)}
		</span>
	);
}

export default Monogram;
