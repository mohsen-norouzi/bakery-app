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
		name: "Hazelnut & Raisin",
		description:
			"Toasted hazelnuts and sweet raisins, with chunks of dark chocolate and sea salt.",
		badge: "New",
		image: "hazelnut-raisin.png",
	},
	{
		name: "Fudgy Brownie",
		description: "Dense and fudgy, with a crackly top and chocolate chips.",
		badge: "New",
		image: "brownie",
		kind: "brownie",
		price: 4.5,
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

/** Whether this product can be ordered vegan. */
export function hasVeganOption(name) {
	return COOKIES.find((cookie) => cookie.name === name)?.vegan !== false;
}
