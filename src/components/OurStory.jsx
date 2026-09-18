import { Link } from "react-router-dom";
import { Sparkle } from "./HalloweenDecor";
import { ArrowRightIcon } from "./icons";
import Reveal from "./Reveal";

function OurStory() {
	return (
		<section className="season-story">
			<div className="story-photo">
				<img
					src="/img/halloween/autumn-kitchen.webp"
					alt="Freshly baked cookies in our cosy autumn kitchen, with pumpkins, cinnamon and golden leaves"
					width="1672"
					height="941"
					loading="lazy"
				/>
			</div>
			<Reveal className="story-content">
				<p className="season-eyebrow">
					<Sparkle /> A SMALL KITCHEN. A BIG HEART.
				</p>
				<h2>
					Made with love.
					<br />
					<em>And a little magic.</em>
				</h2>
				<p>
					Bavo Bakes began in a small kitchen in Barcelona with one simple idea:
					cookies should make people smile.
				</p>
				<p>
					That’s still our favourite ingredient. From our everyday classics to
					our Halloween little monsters, every batch is made with care, from our
					home to yours.
				</p>
				<Link className="season-text-link" to="/about">
					The story behind the cookies <ArrowRightIcon />
				</Link>
			</Reveal>
		</section>
	);
}
export default OurStory;
