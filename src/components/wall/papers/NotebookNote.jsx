/** Torn-out notebook page: punched holes down the left, faint ruling. */
function NotebookNote({ children }) {
	return (
		<div className="paper-notebook paper-shadow rounded-[3px] bg-[#fffdf7] py-8 pr-7 pl-14">
			{children}
		</div>
	);
}

export default NotebookNote;
