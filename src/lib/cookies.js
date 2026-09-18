/**
 * Every cookie is also baked in a vegan version at the same price. Anything
 * that can't be is marked `vegan: false`.
 */
export const COOKIES = [
	{
		name: "Sea Salt Chocolate Chip",
		description: "Classic chocolate chip, finished with sea salt.",
		badge: "Best Seller",
		image: "sea-salt-chocolate-chip",
	},
	{
		name: "Cardamom & Pistachio",
		description:
			"Fragrant cardamom with pistachio, saffron, and white chocolate.",
		badge: "Popular",
		image: "cardamom-pistachio",
	},
	{
		name: "Hazelnut + Chocolate",
		description:
			"Toasted hazelnuts with chunks of dark chocolate and sea salt.",
		badge: "New",
		image: "hazelnut-chocolate",
	},
	{
		name: "Fudgy Brownie",
		description: "Dense and fudgy, with a crackly top and chocolate chips.",
		badge: "New",
		image: "brownie",
		kind: "brownie",
		price: 3.5,
		vegan: false,
	},
	{
		name: "Chocolate Chip",
		description: "Classic, soft, and loaded with chocolate.",
		image: "chocolate-chip",
	},
	{
		name: "Triple Chocolate",
		description: "Rich cocoa dough with triple the chocolate.",
		image: "triple-chocolate",
	},
	{
		name: "Raisin Cookie",
		description: "Chewy cookies packed with sweet raisins.",
		image: "raisin",
	},
];

export const HALLOWEEN_COOKIES = [
	{
		name: "The Little Pumpkin",
		image: "/img/halloween/pumpkin.webp",
		imageHeight: 1080,
		price: 4,
		vegan: false,
		tag: "A CHEEKY LITTLE TREAT",
		description:
			"A pumpkin grin, a chocolate smile. The cutest little troublemaker in the box.",
		className: "pumpkin-treat",
	},
	{
		name: "The Mummy",
		image: "/img/halloween/mummy.webp",
		imageHeight: 720,
		price: 4,
		vegan: false,
		tag: "ALL WRAPPED UP",
		description:
			"Dressed in a tangle of sweet drizzle, with curious little eyes in every direction.",
		className: "mummy-treat",
	},
	{
		name: "The Spiderweb",
		image: "/img/halloween/spiderweb.webp",
		imageHeight: 820,
		price: 4,
		vegan: false,
		tag: "LOVE AT FIRST FRIGHT",
		description:
			"A beautifully tangled web on a dark, dramatic cookie. Almost too good to share.",
		className: "spiderweb-treat",
	},
];

export const ALL_PRODUCTS = [...COOKIES, ...HALLOWEEN_COOKIES];

/** Whether this product can be ordered vegan. */
export function hasVeganOption(name) {
	return ALL_PRODUCTS.find((cookie) => cookie.name === name)?.vegan !== false;
}
