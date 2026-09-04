/**
 * Curved lines drifting through the wall behind the notes, in the manner of
 * the line drawn across the hero artwork: long, shallow, and running clean off
 * both edges of the page.
 *
 * Each one is a simple long wave run through a spline and then given a body:
 * the outline is walked down one side and back up the other, offset by a width
 * that swells and thins along the way, so the line has the weight of something
 * drawn rather than an even stroke.
 */

/** Smooth polyline through the control points (Catmull-Rom). */
function spline(points, perSegment = 24) {
	const padded = [points[0], ...points, points[points.length - 1]];
	const out = [];

	for (let i = 0; i < padded.length - 3; i++) {
		const [p0, p1, p2, p3] = padded.slice(i, i + 4);
		for (let s = 0; s < perSegment; s++) {
			const t = s / perSegment;
			const t2 = t * t;
			const t3 = t2 * t;
			out.push([
				0.5 *
					(2 * p1[0] +
						(-p0[0] + p2[0]) * t +
						(2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 +
						(-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3),
				0.5 *
					(2 * p1[1] +
						(-p0[1] + p2[1]) * t +
						(2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 +
						(-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3),
			]);
		}
	}
	out.push(points[points.length - 1]);
	return out;
}

/** Turn a curve into a closed outline whose thickness varies along its length. */
function inkStroke(points, weight, wobble) {
	const curve = spline(points);
	const last = curve.length - 1;
	const near = [];
	const far = [];

	for (let i = 0; i <= last; i++) {
		const [x, y] = curve[i];
		const [ax, ay] = curve[Math.max(0, i - 1)];
		const [bx, by] = curve[Math.min(last, i + 1)];
		const length = Math.hypot(bx - ax, by - ay) || 1;
		const nx = -(by - ay) / length;
		const ny = (bx - ax) / length;

		// the weight swells and thins along the line; there is no taper because
		// the line runs off both edges of the page rather than ending on it
		const t = i / last;
		const half = weight * (0.6 + 0.4 * Math.sin(t * Math.PI * 1.7 + wobble));

		near.push([x + nx * half, y + ny * half]);
		far.push([x - nx * half, y - ny * half]);
	}

	const point = ([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`;
	return [
		`M ${point(near[0])}`,
		...near.slice(1).map((p) => `L ${point(p)}`),
		...far.reverse().map((p) => `L ${point(p)}`),
		"Z",
	].join(" ");
}

/**
 * Long, gently rising curves — the shape of the line drawn across the hero
 * artwork. Each spans wider than the viewport so both ends leave the page.
 */
const STROKES = [
	{
		id: "one",
		box: [100, 26],
		points: [
			[0, 20],
			[16, 21.5],
			[31, 15],
			[45, 17.5],
			[60, 8],
			[72, 12],
			[86, 5],
			[100, 1],
		],
		weight: 0.09,
		wobble: 0.4,
		style: { top: "2%" },
		opacity: 0.4,
	},
	{
		id: "two",
		box: [100, 24],
		points: [
			[0, 4],
			[17, 3],
			[33, 11],
			[48, 8.5],
			[63, 17],
			[78, 13],
			[92, 20],
			[100, 22],
		],
		weight: 0.075,
		wobble: 2.3,
		style: { top: "28%" },
		opacity: 0.34,
	},
	{
		id: "three",
		box: [100, 28],
		points: [
			[0, 22],
			[15, 18],
			[30, 23],
			[46, 12],
			[61, 16],
			[76, 6],
			[90, 9],
			[100, 3],
		],
		weight: 0.085,
		wobble: 1.1,
		style: { top: "52%" },
		opacity: 0.36,
		className: "hidden sm:block",
	},
	{
		id: "four",
		box: [100, 24],
		points: [
			[0, 8],
			[18, 12],
			[34, 6],
			[50, 14],
			[66, 9],
			[80, 18],
			[94, 13],
			[100, 16],
		],
		weight: 0.07,
		wobble: 3.4,
		style: { bottom: "1%" },
		opacity: 0.3,
		className: "hidden sm:block",
	},
];

/** Scales every stroke's weight; tuned by eye against the artwork. */
const THICKNESS = 0.35;

/** The `tan` token, and how far the layer runs past the page edges. */
const COLOR = "#a67c52";
const SPREAD = 112; // vw

function WallLines() {
	return (
		<div
			aria-hidden="true"
			className="pointer-events-none absolute inset-y-0 left-1/2 z-0 -translate-x-1/2"
			style={{ width: `${SPREAD}vw`, color: COLOR }}
		>
			{STROKES.map((stroke) => (
				<svg
					key={stroke.id}
					viewBox={`0 0 ${stroke.box[0]} ${stroke.box[1]}`}
					className={`absolute left-0 h-auto w-full ${stroke.className ?? ""}`}
					style={{ ...stroke.style, opacity: stroke.opacity }}
				>
					<title>Decorative line</title>
					<path
						d={inkStroke(
							stroke.points,
							stroke.weight * THICKNESS,
							stroke.wobble,
						)}
						fill="currentColor"
					/>
				</svg>
			))}
		</div>
	);
}

export default WallLines;
