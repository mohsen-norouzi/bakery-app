import { ArrowRightIcon, InstagramIcon } from "./icons";
import Reveal from "./Reveal";

const PHOTOS = [
	{
		src: "gallery-halloween-box-six",
		alt: "All six Halloween cookies in a gift box surrounded by cobwebs",
		position: "50% 52%",
	},
	{
		src: "gallery-halloween-box-three",
		alt: "Little Ghosts, Patchwork Monster and Midnight Mummy cookies in a Halloween gift box",
		position: "50% 55%",
	},
	{ src: "gift-box", alt: "A closer look at our Halloween cookie trio" },
	{
		src: "autumn-kitchen",
		alt: "Cosy autumn baking with cookies and pumpkins",
	},
];
function InstagramFeed() {
	return (
		<section className="season-social season-section">
			<div className="season-container">
				<Reveal className="social-heading">
					<div>
						<p className="season-eyebrow">
							<InstagramIcon /> FRESH FROM OUR KITCHEN
						</p>
						<h2>
							A little behind <em>the bakes.</em>
						</h2>
					</div>
					<a
						className="season-text-link"
						href="https://instagram.com/bavobakes"
						target="_blank"
						rel="noopener noreferrer"
					>
						@bavobakes <ArrowRightIcon />
					</a>
				</Reveal>
				<div className="season-social-grid">
					{PHOTOS.map((photo) => (
						<a
							key={photo.src}
							href="https://instagram.com/bavobakes"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Visit Bavo Bakes on Instagram"
						>
							<img
								src={`/img/halloween/${photo.src}.webp`}
								alt={photo.alt}
								width="600"
								height="800"
								style={{ objectPosition: photo.position }}
								loading="lazy"
							/>
							<InstagramIcon />
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
export default InstagramFeed;
