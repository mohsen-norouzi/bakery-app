import { Link } from "react-router-dom";

function Logo({ stacked = false }) {
	return (
		<Link
			to="/"
			className={`flex items-center gap-3 ${stacked ? "flex-col" : ""}`}
		>
			<img
				src="/img/logo.png"
				alt=""
				aria-hidden="true"
				className="h-10 w-auto shrink-0"
			/>
			<span className="flex flex-col leading-none">
				<span className="whitespace-nowrap font-display text-2xl text-brown">
					Bavo <span className="text-brown/50">Bakes</span>
				</span>
				<span className="mt-1.5 flex w-full items-center justify-between text-[10px] text-brown/60 uppercase">
					<span>Homemade</span>
					<span aria-hidden="true">•</span>
					<span>Cookies</span>
				</span>
			</span>
		</Link>
	);
}

export default Logo;
