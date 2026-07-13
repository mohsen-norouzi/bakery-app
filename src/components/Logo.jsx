import { Link } from "react-router-dom";

function Logo({ stacked = false, large = false }) {
	return (
		<Link
			to="/"
			className={`flex items-center gap-3 ${stacked ? "flex-col gap-4" : ""}`}
		>
			<img
				src="/img/logo.png"
				alt=""
				aria-hidden="true"
				className={`w-auto shrink-0 ${large ? "h-20" : "h-10"}`}
			/>
			<span className={`flex flex-col leading-none ${stacked ? "items-center text-center" : ""}`}>
				<span
					className={`whitespace-nowrap font-display text-brown ${large ? "text-4xl" : "text-2xl"}`}
				>
					Bavo <span className="text-brown/50">Bakes</span>
				</span>
				<span
					className={`mt-2 flex items-center gap-2 text-brown/60 uppercase ${large ? "text-xs tracking-[0.2em]" : "mt-1.5 w-full justify-between text-[10px]"}`}
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
