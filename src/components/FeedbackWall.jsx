import { TESTIMONIALS, WALL_STATS } from "../lib/testimonials";
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
		<section className="bg-cream pb-24">
			<div className="mx-auto max-w-7xl px-5 pt-14 pb-14 sm:px-8">
				<WallIntro />
			</div>

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

			<div className="mx-auto mt-12 max-w-3xl px-5 sm:px-8">
				<StatsBar stats={WALL_STATS} />
			</div>
		</section>
	);
}

export default FeedbackWall;
