function ImagePlaceholder({ width, height, label, className = "" }) {
	return (
		<div
			className={`flex items-center justify-center border border-dashed border-brown/30 bg-brown/5 font-sans text-xs text-brown/40 ${className}`}
			style={{ aspectRatio: `${width} / ${height}` }}
		>
			{label ?? `${width}×${height}`}
		</div>
	);
}

export default ImagePlaceholder;
