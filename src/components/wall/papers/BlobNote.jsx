/** Soft organic blob of colored paper. */
function BlobNote({ children }) {
	return (
		<div className="paper-blob paper-shadow bg-[#f3e2cb] px-11 py-11">
			{children}
		</div>
	);
}

export default BlobNote;
