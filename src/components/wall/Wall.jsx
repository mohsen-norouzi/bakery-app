import WallLines from "./WallLines";

/**
 * The pinboard: a plain vertical page that flows the notes through responsive
 * columns, so the wall reads top to bottom like any other page. The lines sit
 * behind the notes, inside this area only.
 */
function Wall({ children }) {
	return (
		<div className="relative mx-auto max-w-6xl px-5 sm:px-8">
			<WallLines />

			<div className="relative z-10 columns-1 gap-6 sm:columns-2 xl:columns-3">
				{children}
			</div>
		</div>
	);
}

export default Wall;
