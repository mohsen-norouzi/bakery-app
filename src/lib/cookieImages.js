import { COOKIES } from "./cookies";

const COOKIE_IMAGES = Object.fromEntries(
	COOKIES.filter((cookie) => cookie.image).map((cookie) => [
		cookie.name,
		cookie.image,
	]),
);

export function getCookieImageSrc(name) {
	const filename = COOKIE_IMAGES[name];
	return filename ? `/img/cookies/${filename}.webp` : null;
}
