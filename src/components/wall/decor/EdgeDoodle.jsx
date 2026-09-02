import Doodle from "./Doodle";

/** Line art pinned to the margin of the wall, placed with percentages. */
function EdgeDoodle({ name, style }) {
	const { rotate = 0, width, ...position } = style;

	return (
		<div
			className="absolute"
			style={{
				...position,
				width,
				transform: rotate ? `rotate(${rotate}deg)` : undefined,
			}}
		>
			<Doodle name={name} />
		</div>
	);
}

export default EdgeDoodle;
