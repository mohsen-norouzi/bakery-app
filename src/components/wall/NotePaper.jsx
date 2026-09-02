import { NOTES } from "../../lib/notes";

/**
 * Writes a quote onto one of the photographed notes, or shows the note on its
 * own when there is no quote to write. The note keeps its own
 * aspect ratio, the text sits inside the note's writable area so it never runs
 * over the tape, holes, clip, eyelet or printed flower, and it is turned to
 * match however the paper lies in the photo.
 */
function NotePaper({ note, children }) {
	const paper = NOTES[note];
	if (!paper) return null;

	const { top, right, bottom, left } = paper.pad ?? {};

	return (
		<div
			className="relative flex flex-col justify-center"
			style={{ aspectRatio: paper.ratio }}
		>
			<img
				src={paper.src}
				alt={paper.alt ?? ""}
				loading="lazy"
				className="pointer-events-none absolute inset-0 size-full object-fill"
			/>

			{children && (
				<div
					className="relative"
					style={{
						padding: `${top}% ${right}% ${bottom}% ${left}%`,
						rotate: paper.tilt ? `${paper.tilt}deg` : undefined,
					}}
				>
					{children}
				</div>
			)}
		</div>
	);
}

export default NotePaper;
