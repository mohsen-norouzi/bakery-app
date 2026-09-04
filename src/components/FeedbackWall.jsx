import { TESTIMONIALS, WALL_STATS } from "../lib/testimonials";
import DashedRule from "./DashedRule";
import Reveal from "./Reveal";
import NotePaper from "./wall/NotePaper";
import StatsBar from "./wall/StatsBar";
import TestimonialCard from "./wall/TestimonialCard";
import Wall from "./wall/Wall";
import WallIntro from "./wall/WallIntro";
import WallItem from "./wall/WallItem";

/**
 * The whole feedback wall: the intro, the notes, and the tally. What goes on
 * the wall and in what order comes from data/feedbacks.json; how each note
 * looks comes from lib/notes.
 */
function FeedbackWall() {
	return (
		<section className="relative overflow-hidden bg-cream pb-24">
			<div className="relative z-10 mx-auto max-w-7xl px-5 pt-14 pb-10 sm:px-8">
				<WallIntro />
			</div>

			<div className="relative z-10 mx-auto mb-14 max-w-6xl px-5 sm:px-8">
				<DashedRule />
			</div>

			<div className="relative z-10">
				<Wall>
					{TESTIMONIALS.map((item) => (
						<WallItem key={item.id} rotate={item.rotate}>
							{item.kind === "image" ? (
								<NotePaper note={item.note} />
							) : (
								<TestimonialCard {...item} />
							)}
						</WallItem>
					))}
				</Wall>
			</div>

			<div className="relative z-10 mx-auto mt-16 max-w-6xl px-5 sm:px-8">
				<DashedRule />
			</div>

			<Reveal>
				<div className="relative z-10 mx-auto mt-14 max-w-2xl px-5 sm:px-8">
					<StatsBar stats={WALL_STATS} />
				</div>
			</Reveal>
		</section>
	);
}

export default FeedbackWall;
