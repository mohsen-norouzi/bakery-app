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
		price: 3.8,
	},
	{
		name: "Cardamom & Pistachio",
		description:
			"Fragrant cardamom with pistachio, saffron, and white chocolate.",
		badge: "Popular",
		image: "cardamom-pistachio",
		price: 4.5,
	},
	{
		name: "Hazelnut + Chocolate",
		description:
			"Toasted hazelnuts with chunks of dark chocolate and sea salt.",
		badge: "New",
		image: "hazelnut-chocolate",
		price: 4,
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
		price: 3.8,
	},
	{
		name: "Triple Chocolate",
		description: "Rich cocoa dough with triple the chocolate.",
		image: "triple-chocolate",
		price: 3.8,
	},
	{
		name: "Raisin Cookie",
		description: "Chewy cookies packed with sweet raisins.",
		image: "raisin",
		price: 4,
	},
];

export const HALLOWEEN_COOKIES = [
	{
		name: "The Little Pumpkin",
		image: "/img/halloween/pumpkin.webp",
		imageHeight: 1080,
		price: 3.8,
		vegan: true,
		tag: "A CHEEKY LITTLE TREAT",
		description:
			"A pumpkin grin, a chocolate smile. The cutest little troublemaker in the box.",
		className: "pumpkin-treat",
	},
	{
		name: "The Mummy",
		image: "/img/halloween/mummy.webp",
		imageHeight: 720,
		price: 3.8,
		vegan: true,
		tag: "ALL WRAPPED UP",
		description:
			"Dressed in a tangle of sweet drizzle, with curious little eyes in every direction.",
		className: "mummy-treat",
	},
	{
		name: "The Spiderweb",
		image: "/img/halloween/spiderweb.webp",
		imageHeight: 820,
		price: 3.8,
		vegan: true,
		tag: "LOVE AT FIRST FRIGHT",
		description:
			"A beautifully tangled web on a dark, dramatic cookie. Almost too good to share.",
		className: "spiderweb-treat",
	},
	{
		name: "The Midnight Mummy",
		image: "/img/halloween/midnight-mummy-cutout.webp",
		imageHeight: 720,
		price: 3.8,
		vegan: false,
		tag: "A SWEET MIDNIGHT MISCHIEF",
		description:
			"Two little eyes peeking through a wild tangle of sweet drizzle. A midnight mischief-maker.",
		className: "midnight-mummy-treat",
	},
	{
		name: "The Little Ghosts",
		image: "/img/halloween/little-ghosts-cutout.webp",
		imageHeight: 720,
		price: 3.8,
		vegan: true,
		tag: "THE FRIENDLIEST LITTLE FRIGHTS",
		description:
			"A gathering of sweet little ghosts on a golden cookie. Bringing a little boo to every bite.",
		className: "little-ghosts-treat",
	},
	{
		name: "The Patchwork Monster",
		image: "/img/halloween/patchwork-monster-cutout.webp",
		imageHeight: 720,
		price: 3.8,
		vegan: true,
		tag: "STITCHED TOGETHER WITH SWEETNESS",
		description:
			"Three colourful patches, tiny sweet stitches and eyes everywhere. Our lovable little monster.",
		className: "patchwork-monster-treat",
	},
];

export const ALL_PRODUCTS = [...COOKIES, ...HALLOWEEN_COOKIES];

/** Whether this product can be ordered vegan. */
export function hasVeganOption(name) {
	return ALL_PRODUCTS.find((cookie) => cookie.name === name)?.vegan !== false;
}
