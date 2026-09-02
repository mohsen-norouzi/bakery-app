import {
	EDGE_DECOR,
	TESTIMONIALS,
	WALL_ACCENTS,
	WALL_STATS,
} from "../lib/testimonials";
import EdgeDoodle from "./wall/decor/EdgeDoodle";
import WallDecor from "./wall/decor/WallDecor";
import StatsBar from "./wall/StatsBar";
import TestimonialCard from "./wall/TestimonialCard";
import Wall from "./wall/Wall";
import WallIntro from "./wall/WallIntro";
import WallItem from "./wall/WallItem";

/** Quotes with their scraps tucked in after them, in column order. */
function buildWallItems() {
	return TESTIMONIALS.flatMap((testimonial, index) => [
		<WallItem key={testimonial.id} rotate={testimonial.rotate}>
			<TestimonialCard {...testimonial} />
		</WallItem>,
		...WALL_ACCENTS.filter((accent) => accent.after === index).map((accent) => (
			<WallItem key={accent.id} rotate={accent.rotate}>
				<WallDecor item={accent} />
			</WallItem>
		)),
	]);
}

/**
 * The whole feedback wall. Nothing is positioned here — what each note looks
 * like and where the scraps go both come from lib/testimonials.
 */
function FeedbackWall() {
	return (
		<section className="wall-grain bg-cream pb-24">
			<div className="mx-auto max-w-7xl px-5 pt-14 pb-14 sm:px-8">
				<WallIntro />
			</div>

			<Wall
				edges={EDGE_DECOR.map((doodle) => (
					<EdgeDoodle key={doodle.id} name={doodle.name} style={doodle.style} />
				))}
			>
				{buildWallItems()}
			</Wall>

			<div className="mx-auto mt-10 max-w-3xl px-5 sm:px-8">
				<StatsBar stats={WALL_STATS} />
			</div>
		</section>
	);
}

export default FeedbackWall;
