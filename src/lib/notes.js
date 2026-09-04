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
 * its paper edges, then inset for margin.
 */
export const NOTES = {
	// A finished scrap: its message is part of the photo, so nothing is
	// written over it and `alt` carries the words instead.
	main: {
		src: "/img/feedbacks/main.png",
		ratio: 1155 / 897,
		tilt: 0,
		alt: "Thank you for making our little bakery a part of your sweet moments!",
	},
	"note-1": {
		src: "/img/feedbacks/note-1.png",
		ratio: 1254 / 1254,
		tilt: 0,
		// left margin clears the punched holes, top clears the tape, and the
		// bottom stays off the crumbs in the corner
		pad: { top: 20, right: 12, bottom: 17, left: 18 },
	},
	"note-2": {
		src: "/img/feedbacks/note-2.png",
		ratio: 1074 / 1195,
		tilt: 2.1,
		// top clears the tape
		pad: { top: 18, right: 10, bottom: 12, left: 10 },
	},
	"note-3": {
		src: "/img/feedbacks/note-3.png",
		ratio: 1227 / 999,
		tilt: 0.7,
		// symmetric sides, wide enough to clear the paperclip on the left
		pad: { top: 10, right: 15, bottom: 10, left: 15 },
	},
	"note-4": {
		src: "/img/feedbacks/note-4.png",
		ratio: 1170 / 932,
		tilt: 0,
		pad: { top: 11, right: 10, bottom: 11, left: 10 },
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
		ratio: 1199 / 983,
		tilt: 0,
		// left margin clears the printed daisy
		pad: { top: 9, right: 9, bottom: 9, left: 25 },
	},
};
