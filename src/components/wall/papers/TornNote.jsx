/** Hand-torn note: ragged edges on all four sides. */
function TornNote({ children }) {
	return (
		<div className="paper-torn-shadow">
			<div className="paper-torn bg-[#fdf6ea] px-7 py-8">{children}</div>
		</div>
	);
}

export default TornNote;
