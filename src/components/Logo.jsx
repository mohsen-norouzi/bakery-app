import { Link } from "react-router-dom";

function Logo({ stacked = false, large = false, compact = false, onNavigate }) {
	const iconSize = large ? "h-20" : compact ? "h-8" : "h-10";
	const titleSize = large ? "text-4xl" : compact ? "text-lg" : "text-2xl";

	return (
		<Link
			to="/"
			onClick={onNavigate}
			className={`flex min-w-0 items-center ${compact ? "gap-2" : "gap-3"} ${stacked ? "flex-col gap-4" : ""}`}
		>
			<img
				src="/img/logo.png"
				alt=""
				aria-hidden="true"
				className={`w-auto shrink-0 ${iconSize}`}
			/>
			<span className={`flex min-w-0 flex-col leading-none ${stacked ? "items-center text-center" : ""}`}>
				<span
					className={`truncate font-display text-brown ${titleSize}`}
				>
					Bavo <span className="text-brown/50">Bakes</span>
				</span>
				<span
					className={`mt-2 flex items-center gap-2 text-brown/60 uppercase ${large ? "text-xs tracking-[0.2em]" : compact ? "mt-1 hidden text-[10px] sm:flex sm:justify-between sm:w-full" : "mt-1.5 w-full justify-between text-[10px]"}`}
				>
					<span>Homemade</span>
					<span aria-hidden="true">•</span>
					<span>Cookies</span>
				</span>
			</span>
		</Link>
	);
}

export default Logo;
