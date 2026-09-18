import { buildWhatsAppEnquiryUrl } from "../lib/whatsapp";
import { Sparkle } from "./HalloweenDecor";
import { ArrowRightIcon } from "./icons";
import Reveal from "./Reveal";

const TREATS = [
	{
		name: "The Little Pumpkin",
		image: "pumpkin",
		tag: "A CHEEKY LITTLE TREAT",
		description:
			"A pumpkin grin, a chocolate smile. The cutest little troublemaker in the box.",
		className: "pumpkin-treat",
	},
	{
		name: "The Mummy",
		image: "mummy",
		tag: "ALL WRAPPED UP",
		description:
			"Dressed in a tangle of sweet drizzle, with curious little eyes in every direction.",
		className: "mummy-treat",
	},
	{
		name: "The Spiderweb",
		image: "spiderweb",
		tag: "LOVE AT FIRST FRIGHT",
		description:
			"A beautifully tangled web on a dark, dramatic cookie. Almost too good to share.",
		className: "spiderweb-treat",
	},
];

export default function HalloweenCollection() {
	return (
		<section
			className="halloween-collection season-section"
			id="halloween"
			aria-labelledby="halloween-title"
		>
			<div className="season-container">
				<Reveal className="season-section-heading">
					<p className="season-eyebrow">
						<Sparkle /> THE HALLOWEEN COLLECTION <Sparkle />
					</p>
					<h2 id="halloween-title">
						Meet the <em>sweet little monsters.</em>
					</h2>
					<p>
						A little frightful. A whole lot delightful. Pick your Halloween
						personality.
					</p>
				</Reveal>
				<div className="halloween-treat-grid">
					{TREATS.map((treat, index) => (
						<Reveal key={treat.name} delay={index * 90}>
							<article className={`halloween-treat ${treat.className}`}>
								<a
									className="treat-art"
									href={buildWhatsAppEnquiryUrl(treat.name)}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`Ask about ${treat.name} on WhatsApp`}
								>
									<span className="treat-number">0{index + 1}</span>
									<span className="treat-season-label">HALLOWEEN EDITION</span>
									<img
										src={`/img/halloween/${treat.image}.webp`}
										alt={treat.name}
										width="720"
										height={
											treat.image === "mummy"
												? 720
												: treat.image === "pumpkin"
													? 1080
													: 820
										}
										loading="lazy"
									/>
								</a>
								<div className="treat-info">
									<p className="treat-tag">{treat.tag}</p>
									<h3>{treat.name}</h3>
									<p className="treat-description">{treat.description}</p>
									<a
										className="treat-link"
										href={buildWhatsAppEnquiryUrl(treat.name)}
										target="_blank"
										rel="noopener noreferrer"
									>
										Enquire about this treat <ArrowRightIcon />
									</a>
								</div>
							</article>
						</Reveal>
					))}
				</div>
				<p className="collection-note">
					For flavours, ingredients, prices and availability, just ask us on
					WhatsApp.
				</p>
			</div>
		</section>
	);
}
