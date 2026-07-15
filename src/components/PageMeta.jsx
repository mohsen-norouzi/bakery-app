import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getBakeryJsonLd, getPageSeo, SITE, SITE_URL } from "../lib/seo";

function upsertMeta(name, content, { property = false } = {}) {
	const attr = property ? "property" : "name";
	let element = document.head.querySelector(`meta[${attr}="${name}"]`);

	if (!element) {
		element = document.createElement("meta");
		element.setAttribute(attr, name);
		document.head.appendChild(element);
	}

	element.setAttribute("content", content);
}

function upsertLink(rel, href) {
	let element = document.head.querySelector(`link[rel="${rel}"]`);

	if (!element) {
		element = document.createElement("link");
		element.setAttribute("rel", rel);
		document.head.appendChild(element);
	}

	element.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
	let element = document.getElementById(id);

	if (!element) {
		element = document.createElement("script");
		element.id = id;
		element.type = "application/ld+json";
		document.head.appendChild(element);
	}

	element.textContent = JSON.stringify(data);
}

function PageMeta() {
	const { pathname } = useLocation();

	useEffect(() => {
		const seo = getPageSeo(pathname);

		document.title = seo.title;

		upsertMeta("description", seo.description);
		upsertMeta("og:title", seo.title, { property: true });
		upsertMeta("og:description", seo.description, { property: true });
		upsertMeta("og:type", "website", { property: true });
		upsertMeta("og:url", seo.canonical, { property: true });
		upsertMeta("og:image", seo.ogImage, { property: true });
		upsertMeta("og:image:secure_url", seo.ogImage, { property: true });
		upsertMeta("og:image:type", "image/png", { property: true });
		upsertMeta("og:image:width", "1200", { property: true });
		upsertMeta("og:image:height", "630", { property: true });
		upsertMeta("og:image:alt", `${SITE.name} — ${SITE.tagline}`, {
			property: true,
		});
		upsertMeta("og:site_name", SITE.name, { property: true });
		upsertMeta("og:locale", `${SITE.locale}_ES`, { property: true });
		upsertMeta("twitter:card", "summary_large_image");
		upsertMeta("twitter:title", seo.title);
		upsertMeta("twitter:description", seo.description);
		upsertMeta("twitter:image", seo.ogImage);

		upsertLink("canonical", seo.canonical);
		upsertJsonLd("bakery-jsonld", getBakeryJsonLd(SITE_URL));
	}, [pathname]);

	return null;
}

export default PageMeta;
