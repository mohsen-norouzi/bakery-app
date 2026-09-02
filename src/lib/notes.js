/**
 * The photographed notes a testimonial can be written on.
 *
 *   src     the note image, used exactly as shot
 *   ratio   its aspect ratio, so the paper is never distorted
 *   pad     the area of the note that is safe to write on, keeping text clear
 *           of the tape, punch holes, paperclip, string and printed flower
 *
 * `pad` values are percentages of the note's WIDTH — CSS resolves percentage
 * padding against width on every side, so the vertical numbers are converted
 * from the artwork the same way.
 */
export const NOTES = {
	"note-1": {
		src: "/img/feedbacks/note-1.png",
		ratio: 1276 / 1233,
		pad: { top: 20, right: 12, bottom: 16, left: 18 },
	},
	"note-2": {
		src: "/img/feedbacks/note-2.png",
		ratio: 1199 / 1312,
		pad: { top: 20, right: 13, bottom: 19, left: 14 },
	},
	"note-3": {
		src: "/img/feedbacks/note-3.png",
		ratio: 1402 / 1122,
		pad: { top: 10, right: 9, bottom: 9, left: 17 },
	},
	"note-4": {
		src: "/img/feedbacks/note-4.png",
		ratio: 1341 / 1173,
		pad: { top: 12, right: 12, bottom: 12, left: 12 },
	},
	"note-5": {
		src: "/img/feedbacks/note-5.png",
		ratio: 1054 / 1492,
		pad: { top: 44, right: 22, bottom: 15, left: 22 },
	},
	"note-6": {
		src: "/img/feedbacks/note-6.png",
		ratio: 1341 / 1173,
		pad: { top: 10, right: 9, bottom: 10, left: 27 },
	},
};
