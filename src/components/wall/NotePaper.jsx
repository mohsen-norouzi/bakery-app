import { NOTES } from "../../lib/notes";

/**
 * Writes a quote onto one of the photographed notes. The note keeps its own
 * aspect ratio, and the text sits inside the note's writable area so it never
 * runs over the tape, holes, clip, string or printed flower.
 */
function NotePaper({ note, children }) {
	const paper = NOTES[note];
	if (!paper) return null;

	const { top, right, bottom, left } = paper.pad;

	return (
		<div
			className="relative flex flex-col justify-center"
			style={{ aspectRatio: paper.ratio }}
		>
			<img
				src={paper.src}
				alt=""
				loading="lazy"
				className="pointer-events-none absolute inset-0 size-full object-fill"
			/>

			<div
				className="relative"
				style={{ padding: `${top}% ${right}% ${bottom}% ${left}%` }}
			>
				{children}
			</div>
		</div>
	);
}

export default NotePaper;
