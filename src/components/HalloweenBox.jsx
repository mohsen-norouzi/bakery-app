import { buildWhatsAppEnquiryUrl } from "../lib/whatsapp";
import { Bat, Sparkle } from "./HalloweenDecor";
import { ArrowRightIcon, BagIcon, HeartIcon } from "./icons";
import Reveal from "./Reveal";

export default function HalloweenBox() {
	return (
		<section className="halloween-box" aria-labelledby="box-title">
			<div className="box-photo">
				<img
					src="/img/halloween/gift-box.webp"
					alt="The pumpkin, mummy and spiderweb cookies nestled together in a Halloween gift box"
					width="941"
					height="1672"
					loading="lazy"
				/>
				<span className="box-photo-label">A BOX FULL OF LITTLE MONSTERS</span>
			</div>
			<div className="box-content">
				<Bat className="box-bat" />
				<Reveal>
					<p className="season-eyebrow">
						<Sparkle /> BETTER TOGETHER
					</p>
					<h2 id="box-title">
						The sweetest
						<br />
						kind of <em>fright.</em>
					</h2>
					<p>
						For your favourite ghoul, your Halloween gathering, or a cosy night
						in. Our spooky little trio makes every moment a little sweeter.
					</p>
					<div className="box-details">
						<span>
							<BagIcon /> Ready for gifting
						</span>
						<span>
							<HeartIcon /> Made with love
						</span>
					</div>
					<a
						className="season-button"
						href={buildWhatsAppEnquiryUrl("the Halloween cookie box")}
						target="_blank"
						rel="noopener noreferrer"
					>
						Ask about the Halloween box <ArrowRightIcon />
					</a>
					<p className="box-small-print">
						Let’s plan your treats together on WhatsApp.
					</p>
				</Reveal>
			</div>
		</section>
	);
}
