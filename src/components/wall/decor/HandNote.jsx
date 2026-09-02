/** A line of handwriting straight on the wall, or on a small taped note. */
function HandNote({ text, tone = "bare" }) {
	if (tone === "paper") {
		return (
			<p className="paper-shadow m-0 bg-[#f7ecd9] px-7 py-8 text-center font-logo text-lg leading-relaxed text-brown/80">
				{text}
			</p>
		);
	}

	return (
		<p className="m-0 font-logo text-xl leading-loose text-brown/75">{text}</p>
	);
}

export default HandNote;
