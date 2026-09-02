/**
 * One thing pinned to the wall. Keeps its tilt, and stays whole when the
 * column flow breaks around it.
 */
function WallItem({ rotate = 0, className = "", children }) {
	return (
		<div
			className={`mb-7 break-inside-avoid ${className}`}
			style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
		>
			{children}
		</div>
	);
}

export default WallItem;
