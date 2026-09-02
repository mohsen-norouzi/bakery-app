import BlobNote from "./BlobNote";
import NotebookNote from "./NotebookNote";
import PlainCard from "./PlainCard";
import ScallopNote from "./ScallopNote";
import TagNote from "./TagNote";
import TornNote from "./TornNote";

/** Paper styles a testimonial can be written on — see lib/testimonials. */
export const PAPERS = {
	torn: TornNote,
	notebook: NotebookNote,
	tag: TagNote,
	scallop: ScallopNote,
	blob: BlobNote,
	plain: PlainCard,
};
