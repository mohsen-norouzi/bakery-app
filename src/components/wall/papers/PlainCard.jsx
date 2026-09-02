/** The quiet one: a clean rounded card. */
function PlainCard({ children }) {
	return (
		<div className="paper-shadow rounded-2xl bg-[#fffaf1] px-7 py-8">
			{children}
		</div>
	);
}

export default PlainCard;
