/**
 * Hand-drawn line art scattered between the notes.
 * Add a drawing here, then reference it by name from BOARD_DECOR.
 */
const DOODLES = {
	heartWire: {
		viewBox: "0 0 420 180",
		paths: [
			"M4 148c58 26 126 8 150-32 13-22-5-45-26-37-19 7-17 35 5 45 41 18 112 5 150-32",
			"M336 58c-9-11-25-5-23 8 2 11 17 19 23 23 6-4 21-12 23-23 2-13-14-19-23-8z",
		],
	},
	sprig: {
		viewBox: "0 0 120 200",
		paths: [
			"M62 198C58 142 56 88 64 22",
			"M62 150c-18-6-30-22-32-42 20 2 33 15 36 33",
			"M64 112c17-8 28-25 28-45-19 3-31 17-33 35",
			"M64 74c-15-6-25-19-27-35 17 2 27 14 29 29",
		],
		dots: [
			[64, 20, 5],
			[92, 60, 4],
			[34, 104, 4],
			[90, 128, 4],
		],
	},
	flower: {
		viewBox: "0 0 100 140",
		paths: [
			"M50 138c0-34 0-52 0-66",
			"M50 72c-14 0-24-9-24-20s10-20 24-20 24 9 24 20-10 20-24 20z",
			"M50 32c8-10 22-10 28-2s0 22-12 26",
			"M50 32c-8-10-22-10-28-2s0 22 12 26",
			"M50 108c-12-2-20-10-22-22 12 2 20 10 22 22z",
		],
		dots: [[50, 52, 6]],
	},
	branch: {
		viewBox: "0 0 90 200",
		paths: [
			"M44 198C40 140 40 82 48 20",
			"M46 160c-16 2-28-8-30-24 16-2 28 8 30 24z",
			"M46 122c16 2 28-8 30-24-16-2-28 8-30 24z",
			"M48 84c-15 2-26-7-28-22 15-2 26 7 28 22z",
			"M48 48c15 2 26-7 28-22-15-2-26 7-28 22z",
		],
	},
	paperPlane: {
		viewBox: "0 0 200 120",
		paths: [
			"M118 34l72 22-72 30 6-30-6-22z",
			"M124 64l66-8",
			"M4 104c26-22 54-38 96-46",
		],
		dashed: [2],
	},
	wave: {
		viewBox: "0 0 760 40",
		paths: ["M2 20q47-22 95 0t95 0 95 0 95 0 95 0 95 0 95 0 93 0"],
	},
	heart: {
		viewBox: "0 0 32 30",
		paths: [
			"M16 28C10 24 2 17 2 10 2 4 9 0 16 6 23 0 30 4 30 10c0 7-8 14-14 18z",
		],
	},
	star: {
		viewBox: "0 0 40 40",
		paths: ["M20 3l5 11 12 2-9 9 2 12-10-6-10 6 2-12-9-9 12-2z"],
	},
	cookie: {
		viewBox: "0 0 70 70",
		paths: ["M35 4a31 31 0 1 0 .1 0z"],
		dots: [
			[26, 26, 4],
			[45, 22, 3],
			[40, 44, 4],
			[22, 44, 3],
		],
	},
};

function Doodle({ name, className = "" }) {
	const doodle = DOODLES[name];
	if (!doodle) return null;

	const dashed = doodle.dashed ?? [];

	return (
		<svg
			viewBox={doodle.viewBox}
			aria-hidden="true"
			focusable="false"
			className={`w-full text-brown/35 ${className}`}
		>
			<title>{name}</title>
			{doodle.paths.map((path, index) => (
				<path
					key={path}
					d={path}
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeDasharray={dashed.includes(index) ? "1 8" : undefined}
				/>
			))}
			{(doodle.dots ?? []).map(([cx, cy, r]) => (
				<circle
					key={`${cx}-${cy}`}
					cx={cx}
					cy={cy}
					r={r}
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
				/>
			))}
		</svg>
	);
}

export default Doodle;
