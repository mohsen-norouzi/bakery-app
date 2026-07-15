function HeroBackground({ src, align = "left" }) {
	const imagePosition =
		align === "right"
			? "object-left lg:object-right"
			: "object-[22%_center] sm:object-left lg:object-[38%_center]";

	return (
		<>
			<img
				src={src}
				alt=""
				aria-hidden="true"
				className={`absolute inset-0 -z-20 h-full w-full object-cover ${imagePosition}`}
			/>
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-10 bg-gradient-to-r from-cream from-45% via-cream/90 via-60% to-cream/35 sm:from-cream/95 sm:via-cream/75 sm:to-cream/20 lg:from-cream/70 lg:via-cream/30 lg:to-transparent"
			/>
		</>
	);
}

export default HeroBackground;
