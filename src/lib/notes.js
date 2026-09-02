/**
 * The photographed notes a testimonial can be written on.
 *
 *   src     the note image, used exactly as shot
 *   ratio   its aspect ratio, so the paper is never distorted
 *   tilt    how many degrees the paper itself sits rotated inside the photo;
 *           the text is turned by the same amount so it reads square to the
 *           paper rather than to the image frame
 *   pad     the area of the note that is safe to write on, keeping text clear
 *           of the tape, punch holes, paperclip, eyelet and printed flower
 *
 * `pad` values are percentages of the note's WIDTH — CSS resolves percentage
 * padding against width on every side, so the vertical numbers are converted
 * from the artwork the same way. They were measured off each file by fitting
 * its paper edges, then inset by roughly 6% for margin.
 */
export const NOTES = {
	"note-1": {
		src: "/img/feedbacks/note-1.png",
		ratio: 1276 / 1233,
		tilt: -0.3,
		// left margin clears the punched holes, top clears the tape
		pad: { top: 20, right: 12, bottom: 16, left: 18 },
	},
	"note-2": {
		src: "/img/feedbacks/note-2.png",
		ratio: 1199 / 1312,
		tilt: 2,
		pad: { top: 20, right: 13, bottom: 19, left: 14 },
	},
	"note-3": {
		src: "/img/feedbacks/note-3.png",
		ratio: 1403 / 1121,
		tilt: -1.6,
		// symmetric sides, wide enough to clear the paperclip on the left
		pad: { top: 16, right: 17, bottom: 13, left: 17 },
	},
	"note-4": {
		src: "/img/feedbacks/note-4.png",
		ratio: 1337 / 1176,
		tilt: 0,
		pad: { top: 17, right: 13, bottom: 16, left: 13 },
	},
	"note-5": {
		src: "/img/feedbacks/note-5.png",
		ratio: 1024 / 1536,
		tilt: 0,
		// top clears the eyelet and string
		pad: { top: 46, right: 21, bottom: 10, left: 21 },
	},
	"note-6": {
		src: "/img/feedbacks/note-6.png",
		ratio: 1341 / 1173,
		tilt: 0,
		// left margin clears the printed daisy
		pad: { top: 12, right: 10, bottom: 11, left: 28 },
	},
};
