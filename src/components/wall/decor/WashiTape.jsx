/* In flow rather than absolute: a multi-column layout fragments absolutely
   positioned children, which leaves ghost copies at the foot of the columns. */
const PLACEMENTS = {
	left: "ml-7 -rotate-8",
	center: "mx-auto -rotate-3",
	right: "mr-7 ml-auto rotate-6",
};

/** Strip of translucent washi tape holding a note to the wall. */
function WashiTape({ placement = "center" }) {
	return (
		<span
			aria-hidden="true"
			className={`relative z-20 -mb-4 block h-9 w-28 bg-[#e8d3ae]/75 shadow-[0_2px_6px_-3px_rgba(82,44,9,0.5)] [clip-path:polygon(0_8%,100%_0,100%_92%,0_100%)] ${
				PLACEMENTS[placement] ?? PLACEMENTS.center
			}`}
		>
			<span className="block h-full w-full bg-[repeating-linear-gradient(115deg,transparent_0_7px,rgba(255,255,255,0.45)_7px_9px)]" />
		</span>
	);
}

export default WashiTape;
