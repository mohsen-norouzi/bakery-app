function HeroCurve({ className = "text-cream" }) {
	return (
		<>
			<svg
				viewBox="0 0 1440 120"
				preserveAspectRatio="none"
				className={`pointer-events-none absolute inset-x-0 -bottom-px h-16 w-full sm:h-24 ${className}`}
				aria-hidden="true"
			>
				<path
					d="M0 60 C 360 130 1080 -10 1440 60 L1440 120 L0 120 Z"
					fill="currentColor"
				/>
			</svg>

			<img
				src="/img/hero-stamp.png"
				alt=""
				aria-hidden="true"
				width={140}
				height={140}
				className="absolute bottom-8 left-1/2 z-20 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full object-cover shadow-[0_4px_14px_rgba(82,44,9,0.14)] sm:bottom-12 sm:h-28 sm:w-28"
			/>
		</>
	);
}

export default HeroCurve;
