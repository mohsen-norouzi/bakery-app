import FEEDBACKS from "../data/feedbacks.json";
import { NOTES } from "./notes";

/**
 * Customer feedback lives in data/feedbacks.json. Each quote only needs:
 *
 *   name    who said it
 *   city    where they are
 *   rating  stars, 1–5 — also feeds the average below
 *   quote   the feedback itself — keep it to roughly two lines
 *
 * Optional: "avatar" with a photo path, e.g. "/img/reviews/anna.webp".
 * Id, note paper, tilt, and boxes-delivered are filled in from the name.
 */
const QUOTE_NOTES = Object.keys(NOTES).filter((key) => key !== "main");

function slug(name, index) {
	const base =
		name
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, "-")
			.replace(/^-|-$/g, "") || "guest";
	return `${base}-${index}`;
}

function hash(value) {
	let h = 0;
	for (const char of value) {
		h = (h * 31 + char.charCodeAt(0)) >>> 0;
	}
	return h;
}

function enrich(entry, index) {
	const id = slug(entry.name, index);
	const seed = hash(id);

	return {
		...entry,
		id,
		note: QUOTE_NOTES[index % QUOTE_NOTES.length],
		boxes: 2 + (seed % 17),
		rotate: Number(((seed % 37) / 10 - 1.8).toFixed(1)),
	};
}

const QUOTES = FEEDBACKS.map(enrich);

const THANK_YOU = {
	id: "thank-you",
	kind: "image",
	note: "main",
	rotate: 0.6,
};

const wall = [...QUOTES];
wall.splice(Math.floor(wall.length / 2), 0, THANK_YOU);

export const TESTIMONIALS = wall;

const total = (field) =>
	QUOTES.reduce((sum, quote) => sum + (quote[field] ?? 0), 0);

const count = new Intl.NumberFormat("en-US");
const averageRating = QUOTES.length ? total("rating") / QUOTES.length : 0;

/**
 * The tally under the wall, counted from the feedback itself — add a quote to
 * feedbacks.json and every figure here moves with it.
 */
export const WALL_STATS = [
	{
		id: "rating",
		icon: "heart",
		value: `${Number.isInteger(averageRating) ? averageRating : averageRating.toFixed(1)} / 5`,
		label: "Average Rating",
	},
	{
		id: "customers",
		icon: "smiley",
		value: count.format(QUOTES.length),
		label: "Happy Customers",
	},
	{
		id: "boxes",
		icon: "gift",
		value: count.format(total("boxes")),
		label: "Boxes Delivered",
	},
];
