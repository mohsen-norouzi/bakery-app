import "./wall.css";

/**
 * The pinboard: a plain vertical page that flows the notes through responsive
 * columns, so the wall reads top to bottom like any other page.
 *
 * `edges` is line art pinned to the margins — it sits behind the notes and is
 * dropped on small screens.
 */
function Wall({ edges, children }) {
	return (
		<div className="relative mx-auto max-w-7xl px-5 sm:px-8">
			<div className="pointer-events-none absolute inset-0 hidden lg:block">
				{edges}
			</div>

			<div className="relative columns-1 gap-7 sm:columns-2 xl:columns-3">
				{children}
			</div>
		</div>
	);
}

export default Wall;
