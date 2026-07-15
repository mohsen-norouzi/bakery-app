import Header from "./Header";
import HeroBackground from "./HeroBackground";

function PageHero({ src, align = "left", tall = false, children }) {
	const height = tall ? "min-h-screen" : "h-[90dvh]";

	return (
		<div className={`relative z-10 flex ${height} flex-col bg-cream`}>
			{/* Clip background only — stamp can sit across the section seam */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<HeroBackground src={src} align={align} />
			</div>
			<Header />
			{children}
		</div>
	);
}

export default PageHero;
