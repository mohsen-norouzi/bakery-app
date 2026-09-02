import { TESTIMONIALS, WALL_STATS } from "../lib/testimonials";
import StatsBar from "./wall/StatsBar";
import TestimonialCard from "./wall/TestimonialCard";
import Wall from "./wall/Wall";
import WallIntro from "./wall/WallIntro";
import WallItem from "./wall/WallItem";

/**
 * The whole feedback wall: the intro, one note per quote, and the tally.
 * What each quote looks like comes from lib/testimonials and lib/notes.
 */
function FeedbackWall() {
	return (
		<section className="bg-cream pb-24">
			<div className="mx-auto max-w-7xl px-5 pt-14 pb-14 sm:px-8">
				<WallIntro />
			</div>

			<Wall>
				{TESTIMONIALS.map((testimonial) => (
					<WallItem key={testimonial.id} rotate={testimonial.rotate}>
						<TestimonialCard {...testimonial} />
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
