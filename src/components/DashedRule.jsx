/** The site's stitched divider — same dashes used between the price rows. */
function DashedRule({ className = "" }) {
	return (
		<div
			aria-hidden="true"
			className={`h-px w-full ${className}`}
			style={{
				backgroundImage:
					"repeating-linear-gradient(to right, rgba(82, 44, 9, 0.2) 0 6px, transparent 6px 12px)",
			}}
		/>
	);
}

export default DashedRule;
