import { getCookieImageSrc } from "./cookieImages";

export const SITE_URL = "https://www.bavobakes.com";

export const SITE = {
	name: "Bavo Bakes",
	tagline: "Homemade Cookies, Made with Love in Barcelona",
	description:
		"Handmade cookies baked fresh to order in Barcelona. Small batches, real ingredients, beautifully wrapped. Delivery and pickup available.",
	locale: "en",
	themeColor: "#522c09",
	ogImage: "/img/og-image.png",
	email: "hello@bavobakes.com",
	phone: "+34666611091",
	city: "Barcelona",
	country: "ES",
};

const COOKIE_PRODUCTS = [
	{
		name: "Chocolate Chip",
		description: "Classic, soft, and loaded with chocolate.",
		price: 4.5,
		available: true,
	},
	{
		name: "Double Chocolate",
		description: "Rich cocoa dough with double the chocolate.",
		price: 4.5,
		available: true,
	},
	{
		name: "Chocolate Sea Salt",
		description: "Rich chocolate with a touch of sea salt.",
		price: 4.5,
		available: true,
	},
	{
		name: "Oatmeal & Raisin",
		description: "Chewy oatmeal cookies with sweet raisins.",
		price: 4.5,
		available: false,
	},
	{
		name: "White Chocolate Macadamia",
		description: "Buttery cookies with white chocolate and macadamia.",
		price: 4.5,
		available: false,
	},
	{
		name: "Hazelnut Chocolate",
		description: "Roasted hazelnuts with rich chocolate chunks.",
		price: 4.5,
		available: false,
	},
	{
		name: "Peanut Butter",
		description: "Soft, nutty, and perfectly satisfying.",
		price: 4.5,
		available: false,
	},
	{
		name: "Dark Chocolate Sea Salt",
		description: "Deep dark chocolate with a touch of sea salt.",
		price: 4.5,
		available: false,
	},
];

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
	"/privacy": {
		title: "Privacy Policy | Bavo Bakes",
		description:
			"How Bavo Bakes collects and uses personal information when you contact us or order homemade cookies in Barcelona.",
	},
	"/terms": {
		title: "Terms & Conditions | Bavo Bakes",
		description:
			"Order, delivery, pickup, and product terms for Bavo Bakes homemade cookies in Barcelona.",
	},
};

const NOT_FOUND = {
	title: "Page Not Found | Bavo Bakes",
	description:
		"That page doesn't exist. Browse homemade cookies from Bavo Bakes in Barcelona.",
	robots: "noindex, follow",
};

export function getPageSeo(pathname) {
	const page = PAGES[pathname];

	if (!page) {
		return {
			title: NOT_FOUND.title,
			description: NOT_FOUND.description,
			canonical: SITE_URL,
			ogImage: `${SITE_URL}${SITE.ogImage}`,
			robots: NOT_FOUND.robots,
		};
	}

	return {
		title: page.title,
		description: page.description,
		canonical: `${SITE_URL}${pathname === "/" ? "" : pathname}`,
		ogImage: `${SITE_URL}${SITE.ogImage}`,
		robots: "index, follow",
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
			`https://wa.me/${SITE.phone.replace(/\D/g, "")}`,
		],
	};
}

export function getCookieProductsJsonLd(origin = SITE_URL) {
	return {
		"@context": "https://schema.org",
		"@graph": COOKIE_PRODUCTS.map((cookie) => ({
			"@type": "Product",
			name: cookie.name,
			description: cookie.description,
			image: `${origin}${getCookieImageSrc(cookie.name)}`,
			brand: {
				"@type": "Brand",
				name: SITE.name,
			},
			offers: {
				"@type": "Offer",
				priceCurrency: "EUR",
				price: cookie.price.toFixed(2),
				availability: cookie.available
					? "https://schema.org/InStock"
					: "https://schema.org/PreOrder",
				url: `${origin}/cookies`,
			},
		})),
	};
}
