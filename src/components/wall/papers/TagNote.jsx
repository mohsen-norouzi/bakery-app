/** Gift tag hanging from a loop of string. */
function TagNote({ children }) {
	return (
		<div>
			<svg
				aria-hidden="true"
				viewBox="0 0 80 40"
				className="mx-auto -mb-1 block h-8 w-20 text-brown/35"
			>
				<title>String</title>
				<path
					d="M40 38C22 30 14 18 22 8c6-7 18-4 18 6s12 13 18 6c8-10 0-22-18-30"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>

			<div className="paper-tag paper-shadow bg-[#f7e6cd] px-7 pt-8 pb-8">
				<span
					aria-hidden="true"
					className="mx-auto mb-6 block size-5 rounded-full border-[3px] border-brown/25 bg-cream"
				/>
				{children}
			</div>
		</div>
	);
}

export default TagNote;
