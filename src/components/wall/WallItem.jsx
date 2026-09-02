/** The widest a note is ever drawn, however wide its column gets. */
const MAX_NOTE_WIDTH = 320;

/**
 * One note pinned to the wall. Keeps its tilt, and stays whole when the
 * column flow breaks around it.
 */
function WallItem({ rotate = 0, className = "", children }) {
	return (
		<div
			className={`mx-auto mb-6 break-inside-avoid ${className}`}
			style={{
				maxWidth: MAX_NOTE_WIDTH,
				transform: rotate ? `rotate(${rotate}deg)` : undefined,
			}}
		>
			{children}
		</div>
	);
}

export default WallItem;
