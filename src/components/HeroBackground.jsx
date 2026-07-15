function HeroBackground({ src, align = "left" }) {
	const imagePosition =
		align === "right"
			? "object-[left_55%] lg:object-[right_60%]"
			: "object-[22%_58%] sm:object-[left_55%] lg:object-[40%_58%]";

	return (
		<>
			<img
				src={src}
				alt=""
				aria-hidden="true"
				className={`absolute inset-0 -z-20 h-full w-full object-cover ${imagePosition}`}
			/>
			{/* Keep left copy readable */}
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-10 bg-gradient-to-r from-cream from-45% via-cream/90 via-60% to-cream/35 sm:from-cream/95 sm:via-cream/75 sm:to-cream/20 lg:from-cream/70 lg:via-cream/30 lg:to-transparent"
			/>
			{/* Clear header / nav from collage art */}
			<div
				aria-hidden="true"
				className="absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-cream from-30% via-cream/85 to-transparent sm:h-32 lg:h-36"
			/>
		</>
	);
}

export default HeroBackground;
