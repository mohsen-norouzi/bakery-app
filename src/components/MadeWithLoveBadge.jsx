function MadeWithLoveBadge({ className = "" }) {
	return (
		<svg
			viewBox="0 0 200 200"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			role="img"
			aria-label="Made with love in Barcelona"
		>
			<defs>
				<path
					id="mwl-top"
					d="M 28 100 A 72 72 0 0 1 172 100"
				/>
				<path
					id="mwl-bottom"
					d="M 172 100 A 72 72 0 0 1 28 100"
				/>
			</defs>

			{/* Side arc ticks */}
			<path
				d="M 28.5 88 A 72 72 0 0 0 28.5 112"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M 171.5 88 A 72 72 0 0 1 171.5 112"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>

			<text
				fill="currentColor"
				fontSize="13.5"
				fontFamily="Poppins, sans-serif"
				fontWeight="500"
				letterSpacing="0.22em"
			>
				<textPath href="#mwl-top" startOffset="50%" textAnchor="middle">
					MADE WITH LOVE
				</textPath>
			</text>
			<text
				fill="currentColor"
				fontSize="13.5"
				fontFamily="Poppins, sans-serif"
				fontWeight="500"
				letterSpacing="0.22em"
			>
				<textPath href="#mwl-bottom" startOffset="50%" textAnchor="middle">
					IN BARCELONA
				</textPath>
			</text>
		</svg>
	);
}

export default MadeWithLoveBadge;
