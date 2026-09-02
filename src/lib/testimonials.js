/**
 * Feedback wall content.
 *
 * TODO: the quotes, names, and stats below come from the design mockup —
 * replace them with real customer feedback before launch.
 *
 * The wall is a normal vertical page: cards flow through responsive columns,
 * so nothing here carries coordinates. Each quote only says what it is and
 * how it's pinned up:
 *
 *   style   the paper it's written on —
 *           torn | notebook | tag | scallop | blob | plain
 *   rotate  degrees of tilt, for the pinned-by-hand look
 *   tape    washi tape across the top — "left" | "center" | "right"
 *   clip    paperclip hooked over the top edge
 */

export const TESTIMONIALS = [
	{
		id: "anna",
		name: "Anna P.",
		city: "Barcelona, Spain",
		rating: 5,
		quote:
			"The best cookies I've ever had! You can taste the love in every bite. Thank you for making our evening extra special.",
		style: "torn",
		rotate: -1.2,
		tape: "center",
	},
	{
		id: "james",
		name: "James L.",
		city: "London, UK",
		rating: 5,
		quote:
			"Finally found a bakery that uses real ingredients and makes cookies the old-fashioned way. Simply delicious!",
		style: "plain",
		rotate: 1,
	},
	{
		id: "sophie",
		name: "Sophie T.",
		city: "Paris, France",
		rating: 5,
		quote:
			"I sent a box to my sister in Barcelona and she loved it so much! The cookies arrived fresh and beautifully packed.",
		style: "tag",
		rotate: 1.5,
	},
	{
		id: "daniel",
		name: "Daniel R.",
		city: "Berlin, Germany",
		rating: 5,
		quote:
			"From the classic chocolate chip to the pistachio one — every flavor is a masterpiece. You've gained a loyal customer!",
		style: "plain",
		rotate: -1,
		clip: true,
	},
	{
		id: "elena",
		name: "Elena G.",
		city: "Valencia, Spain",
		rating: 5,
		quote:
			"Perfect for gifts or just treating yourself. You can tell everything is handmade with so much care and passion.",
		style: "plain",
		rotate: 1.2,
	},
	{
		id: "claudia",
		name: "Claudia M.",
		city: "Madrid, Spain",
		rating: 5,
		quote:
			"We order every month and each time it's perfect. Beautiful packaging, amazing taste, and super fast delivery!",
		style: "notebook",
		rotate: -0.6,
		tape: "right",
	},
	{
		id: "laura",
		name: "Laura B.",
		city: "Rome, Italy",
		rating: 5,
		quote:
			"The texture, the flavor, the packaging — everything is absolutely perfect. Can't wait for my next order!",
		style: "blob",
		rotate: 0.6,
	},
	{
		id: "mark",
		name: "Mark D.",
		city: "Amsterdam, Netherlands",
		rating: 5,
		quote:
			"You can truly taste the quality in every bite. These cookies have become our family's favorite treat!",
		style: "plain",
		rotate: 1,
	},
	{
		id: "isabella",
		name: "Isabella K.",
		city: "Vienna, Austria",
		rating: 5,
		quote:
			"Such a delightful experience from start to finish. The cookies are incredible and the service is just as sweet!",
		style: "torn",
		rotate: -1.6,
		tape: "left",
	},
	{
		id: "mateo",
		name: "Mateo F.",
		city: "Lisbon, Portugal",
		rating: 5,
		quote:
			"I've tried many bakeries, but Bavo Bakes is on another level. Pure magic in every single cookie!",
		style: "plain",
		rotate: 0.5,
	},
	{
		id: "nina",
		name: "Nina W.",
		city: "Prague, Czechia",
		rating: 5,
		quote:
			"Beautifully baked, thoughtfully packaged, and absolutely delicious. You can feel the love in every detail.",
		style: "scallop",
		rotate: -1,
		tape: "center",
	},
	{
		id: "lucas",
		name: "Lucas S.",
		city: "Brussels, Belgium",
		rating: 5,
		quote:
			"Ordered for a special occasion and it was a huge hit! Everyone kept asking where they were from.",
		style: "plain",
		rotate: 1.4,
	},
];

/** TODO: confirm these figures before launch. */
export const WALL_STATS = [
	{ id: "rating", icon: "heart", value: "4.9 / 5", label: "Average Rating" },
	{
		id: "customers",
		icon: "smiley",
		value: "12,000+",
		label: "Happy Customers",
	},
	{ id: "boxes", icon: "gift", value: "1,500+", label: "Boxes Delivered" },
];

/**
 * Scraps pinned between the quotes. They flow through the same columns and
 * are inserted after the testimonial at index `after`.
 *
 * kind: handNote | stamp | photo | doodle | art
 * `doodle` names must exist in components/board/decor/Doodle.
 * `art` renders an image from /public — use it to drop illustration files in
 * without touching a component, e.g.
 *   { id: "girl", kind: "art", src: "/img/doodles/girl-cookie.png", after: 3 }
 */
export const WALL_ACCENTS = [
	{
		id: "note-sweet-moments",
		kind: "handNote",
		text: "Thank you for making our little bakery a part of your sweet moments!",
		rotate: -2,
		after: 1,
	},
	{
		id: "photo-cookie",
		kind: "photo",
		src: "/img/cookies/chocolate-chip.webp",
		rotate: -8,
		after: 3,
	},
	{ id: "stamp", kind: "stamp", rotate: -4, after: 5 },
	{
		id: "doodle-sprig",
		kind: "doodle",
		name: "sprig",
		width: 120,
		rotate: 4,
		after: 6,
	},
	{
		id: "note-baked-with-love",
		kind: "handNote",
		text: "Baked with love, shared with joy.",
		tone: "paper",
		rotate: 2,
		tape: "left",
		after: 8,
	},
	{
		id: "photo-brownie",
		kind: "photo",
		src: "/img/cookies/triple-chocolate.webp",
		rotate: 10,
		after: 10,
	},
	{
		id: "doodle-flower",
		kind: "doodle",
		name: "flower",
		width: 110,
		rotate: -6,
		after: 11,
	},
];

/**
 * Line art in the margins of the wall, placed with percentages and pinned
 * behind the cards. Decorative only — hidden below `lg`.
 */
export const EDGE_DECOR = [
	{
		id: "edge-wire",
		name: "heartWire",
		style: { left: "-4%", top: "4%", width: 300 },
	},
	{
		id: "edge-branch",
		name: "branch",
		style: { right: "-2%", top: "26%", width: 90, rotate: 8 },
	},
	{
		id: "edge-heart",
		name: "heart",
		style: { left: "-3%", top: "52%", width: 34 },
	},
	{
		id: "edge-star",
		name: "star",
		style: { right: "-3%", top: "62%", width: 44, rotate: 10 },
	},
	{
		id: "edge-plane",
		name: "paperPlane",
		style: { right: "-5%", bottom: "4%", width: 200 },
	},
	{
		id: "edge-wave",
		name: "wave",
		style: { left: "6%", bottom: "-2%", width: 420 },
	},
];
