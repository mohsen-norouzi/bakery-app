import { COOKIES } from "./cookies";

const COOKIE_IMAGES = Object.fromEntries(
	COOKIES.filter((cookie) => cookie.image).map((cookie) => [
		cookie.name,
		cookie.image,
	]),
);

/**
 * `image` is a filename in /public/img/cookies. Give it an extension to use
 * that file as-is; without one it falls back to .webp, which is what most of
 * the shots are saved as.
 */
export function getCookieImageSrc(name) {
	const filename = COOKIE_IMAGES[name];
	if (!filename) return null;

	const file = filename.includes(".") ? filename : `${filename}.webp`;
	return `/img/cookies/${file}`;
}
