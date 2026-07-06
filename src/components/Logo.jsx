function Logo() {
	return (
		<a href="#" className="flex items-center gap-3">
			<img
				src="/img/logo.png"
				alt="Sweet from Home"
				className="w-14 shrink-0"
			/>
			<div className="leading-tight">
				<p className="font-display text-xl text-brown">Sweet from Home</p>
				<p className="text-[10px] tracking-[0.3em] text-brown/60">
					· HOMEMADE COOKIES ·
				</p>
			</div>
		</a>
	);
}

export default Logo;
