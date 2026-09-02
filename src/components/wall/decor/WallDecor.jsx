import Doodle from "./Doodle";
import HandNote from "./HandNote";
import Stamp from "./Stamp";
import WallPhoto from "./WallPhoto";
import WashiTape from "./WashiTape";

/** Renders one WALL_ACCENTS entry. All of it is scenery — never content. */
function WallDecor({ item }) {
	switch (item.kind) {
		case "handNote":
			return (
				<div className="relative">
					{item.tape && <WashiTape placement={item.tape} />}
					<HandNote text={item.text} tone={item.tone} />
				</div>
			);
		case "stamp":
			return <Stamp />;
		case "photo":
			return <WallPhoto src={item.src} />;
		case "doodle":
			return (
				<div className="mx-auto" style={{ width: item.width }}>
					<Doodle name={item.name} />
				</div>
			);
		case "art":
			return (
				<img
					src={item.src}
					alt=""
					loading="lazy"
					className="mx-auto w-full max-w-56"
				/>
			);
		default:
			return null;
	}
}

export default WallDecor;
