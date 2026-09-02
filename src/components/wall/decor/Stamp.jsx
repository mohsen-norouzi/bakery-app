/** "Made with love in Barcelona" seal, cancelled with a postmark. */
function Stamp() {
	return (
		<div className="flex items-center justify-center gap-4">
			<svg
				aria-hidden="true"
				viewBox="0 0 90 60"
				className="w-20 shrink-0 text-brown/35"
			>
				<title>Postmark</title>
				{[0, 12, 24].map((offset) => (
					<path
						key={offset}
						d={`M2 ${18 + offset}q11-9 22 0t22 0 22 0`}
						fill="none"
						stroke="currentColor"
						strokeWidth="1.6"
						strokeLinecap="round"
					/>
				))}
			</svg>

			<img
				src="/img/made-with-love.png"
				alt=""
				loading="lazy"
				className="w-32 opacity-90 mix-blend-multiply"
			/>
		</div>
	);
}

export default Stamp;
