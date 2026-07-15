import Header from "./Header";
import HeroBackground from "./HeroBackground";
import HeroCurve from "./HeroCurve";

function PageHero({
	src,
	align = "left",
	tall = false,
	curveClassName = "text-cream",
	children,
}) {
	const height = tall ? "min-h-screen" : "h-[90dvh]";

	return (
		<div className={`relative z-10 flex ${height} flex-col bg-cream`}>
			{/* Clip background only — stamp/curve sit on the seam */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<HeroBackground src={src} align={align} />
			</div>
			<Header />
			<div className="relative flex min-h-0 flex-1 flex-col">
				{children}
				<HeroCurve className={curveClassName} />
			</div>
		</div>
	);
}

export default PageHero;
