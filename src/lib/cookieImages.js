const COOKIE_IMAGES = {
	"Chocolate Chip": "classic",
	"Double Chocolate": "double-chocolate",
	"Chocolate Sea Salt": "sea-salt",
	"Dark Chocolate Sea Salt": "dark-sea-salt",
	"White Chocolate Macadamia": "white-chocolate",
	"Peanut Butter": "peanut-butter",
	"Oatmeal & Raisin": "oatmeal-raisin",
	"Hazelnut Chocolate": "hazelnut",
};

function slugifyCookieName(name) {
	return name
		.toLowerCase()
		.replace(/\s*&\s*/g, "-and-")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}

export function getCookieImageSrc(name) {
	const filename = COOKIE_IMAGES[name] ?? slugifyCookieName(name);
	return `/img/cookies/${filename}.webp`;
}
