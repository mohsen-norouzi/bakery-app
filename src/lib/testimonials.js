import FEEDBACKS from "../data/feedbacks.json";

/**
 * Customer feedback lives in data/feedbacks.json — edit the quotes there, no
 * code changes needed. Each entry takes:
 *
 *   id      unique key, any short string
 *   note    which note it's written on: "note-1" … "note-6" (see lib/notes)
 *   name    who said it
 *   city    where they are
 *   rating  stars shown, 1–5 — also feeds the average below
 *   boxes   how many boxes this customer has had delivered — also feeds the
 *           tally below
 *   quote   the feedback itself — keep it to roughly two lines; a much longer
 *           one stretches the note to make room
 *   rotate  degrees of tilt, for the pinned-by-hand look (try -2 to 2)
 *
 * Optional: "avatar" with a photo path, e.g. "/img/reviews/anna.webp",
 * replaces the initials shown by default.
 *
 * An entry with "kind": "image" is a picture pinned to the wall rather than a
 * quote — it needs only "id", "note" and "rotate", and its words (if any) live
 * in the photo itself. Move it up or down the array to move it on the wall.
 * It is scenery, so it counts towards none of the figures below.
 *
 * TODO: these are still the mockup's quotes — replace with real feedback.
 */
export const TESTIMONIALS = FEEDBACKS;

/** The entries that are actual feedback; pinned pictures aren't. */
const QUOTES = FEEDBACKS.filter((item) => item.kind !== "image");

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
