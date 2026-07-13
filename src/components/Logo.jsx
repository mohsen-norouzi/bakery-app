function Logo({ stacked = false }) {
	return (
		<a
			href="#"
			className={`flex gap-3 ${stacked ? "flex-col items-center" : "items-center"}`}
		>
			<img
				src="/img/logo.png"
				alt="Sweet from Home"
				className="w-14 shrink-0"
			/>
			<div className={`leading-tight ${stacked ? "text-center" : ""}`}>
				<p className="font-display text-xl text-brown">Sweet from Home</p>
				<p className="text-[10px] tracking-[0.3em] text-brown/60">
					· HOMEMADE COOKIES ·
				</p>
			</div>
		</a>
	);
}

export default Logo;
