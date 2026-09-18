import { Link } from "react-router-dom";
import { Bat, Pumpkin, Sparkle } from "./HalloweenDecor";
import { ArrowDownIcon, ArrowRightIcon } from "./icons";

function Hero() {
	return (
		<section className="halloween-hero" aria-labelledby="hero-title">
			<picture className="halloween-hero-photo">
				<source
					media="(max-width: 640px)"
					srcSet="/img/halloween/box-wide.webp"
				/>
				<img
					src="/img/halloween/hero.webp"
					alt="A gift box of pumpkin, mummy and spiderweb cookies, surrounded by pumpkins and a little ghost"
					width="1448"
					height="1086"
					fetchPriority="high"
				/>
			</picture>
			<div className="halloween-hero-shade" aria-hidden="true" />
			<div className="season-container hero-content">
				<div className="hero-copy">
					<p className="season-eyebrow">
						<Sparkle /> A LITTLE MAGIC FROM OUR KITCHEN
					</p>
					<h1 id="hero-title">
						A little spooky.
						<br />
						<em>A lot of sweet.</em>
					</h1>
					<p className="hero-description">
						Your favourite homemade cookies, dressed up for Halloween. Baked
						with love and a little mischief in Barcelona.
					</p>
					<div className="hero-actions">
						<a className="season-button" href="#halloween">
							Explore Halloween <ArrowRightIcon />
						</a>
						<Link className="season-text-link" to="/cookies#classics">
							Our classic cookies <ArrowRightIcon />
						</Link>
					</div>
					<p className="hero-footnote">
						<span /> Small batches. Big Halloween energy.
					</p>
				</div>
			</div>
			<div className="hero-season-stamp" aria-hidden="true">
				<span>THE HALLOWEEN</span>
				<Pumpkin />
				<span>COLLECTION</span>
			</div>
			<Bat className="hero-bat" />
			<a
				className="hero-scroll"
				href="#halloween"
				aria-label="Discover the Halloween collection"
			>
				<ArrowDownIcon />
			</a>
			<span className="hero-photo-note">
				No tricks. Just really good cookies.
			</span>
		</section>
	);
}
export default Hero;
