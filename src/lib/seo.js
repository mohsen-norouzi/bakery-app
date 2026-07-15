export const SITE_URL = "https://www.bavobakes.com";

export const SITE = {
	name: "Bavo Bakes",
	tagline: "Homemade Cookies, Made with Love in Barcelona",
	description:
		"Handmade cookies baked fresh to order in Barcelona. Small batches, real ingredients, beautifully wrapped. Delivery and pickup available.",
	locale: "en",
	themeColor: "#522c09",
	ogImage: "/img/og-image.jpg",
	email: "hello@bavobakes.com",
	phone: "+34666611091",
	city: "Barcelona",
	country: "ES",
};

const PAGES = {
	"/": {
		title: "Bavo Bakes | Homemade Cookies in Barcelona",
		description:
			"Freshly baked homemade cookies in Barcelona. Crafted in small batches with quality ingredients, beautifully wrapped and baked to order.",
	},
	"/cookies": {
		title: "Cookies | Bavo Bakes",
		description:
			"Browse our handmade cookies — chocolate chip, double chocolate, oatmeal raisin, and more. Baked fresh to order in Barcelona.",
	},
	"/about": {
		title: "About Us | Bavo Bakes",
		description:
			"Learn about Bavo Bakes — a small Barcelona bakery making homemade cookies with real ingredients, baked fresh in small batches.",
	},
	"/contact": {
		title: "Contact & Order | Bavo Bakes",
		description:
			"Order cookies on WhatsApp, ask about delivery across Barcelona, or get in touch. We're happy to help you find your perfect box.",
	},
};

export function getPageSeo(pathname) {
	const page = PAGES[pathname] ?? PAGES["/"];

	return {
		title: page.title,
		description: page.description,
		canonical: `${SITE_URL}${pathname === "/" ? "" : pathname}`,
		ogImage: `${SITE_URL}${SITE.ogImage}`,
	};
}

export function getBakeryJsonLd(origin = SITE_URL) {
	return {
		"@context": "https://schema.org",
		"@type": "Bakery",
		name: SITE.name,
		description: SITE.description,
		url: origin,
		image: `${origin}${SITE.ogImage}`,
		email: SITE.email,
		telephone: SITE.phone,
		address: {
			"@type": "PostalAddress",
			addressLocality: SITE.city,
			addressCountry: SITE.country,
		},
		sameAs: [
			"https://instagram.com/bavobakes",
			"https://tiktok.com/@bavobakes.bcn",
			`https://wa.me/${SITE.phone.replace(/\D/g, "")}`,
		],
	};
}
