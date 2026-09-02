/**
 * A loose cookie photo lying on the wall. The source shots have a white
 * backdrop, so they're multiplied into the paper instead of sitting on a
 * white square.
 */
function WallPhoto({ src, alt = "" }) {
	return (
		<img
			src={src}
			alt={alt}
			loading="lazy"
			className="mx-auto w-40 mix-blend-multiply"
		/>
	);
}

export default WallPhoto;
