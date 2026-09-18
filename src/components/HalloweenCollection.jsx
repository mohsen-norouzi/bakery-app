import { useCart } from "../context/CartContext";
import { HALLOWEEN_COOKIES } from "../lib/cookies";
import { formatEuro, getFlavorPrice } from "../lib/pricing";
import { Sparkle } from "./HalloweenDecor";
import QuantityControls from "./QuantityControls";
import Reveal from "./Reveal";

export default function HalloweenCollection() {
	const { addItem, removeItem, getQuantity } = useCart();
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
					{HALLOWEEN_COOKIES.map((treat, index) => (
						<Reveal key={treat.name} delay={index * 90}>
							<article className={`halloween-treat ${treat.className}`}>
								<div className="treat-art">
									<span className="treat-number">0{index + 1}</span>
									<span className="treat-season-label">HALLOWEEN EDITION</span>
									<img
										src={treat.image}
										alt={treat.name}
										width="720"
										height={treat.imageHeight}
										loading="lazy"
									/>
								</div>
								<div className="treat-info">
									<p className="treat-tag">{treat.tag}</p>
									<div className="treat-heading">
										<h3>{treat.name}</h3>
										<span className="treat-price">
											{formatEuro(getFlavorPrice(treat.name))}
										</span>
									</div>
									<p className="treat-description">{treat.description}</p>
									<div className="treat-actions">
										<span>ADD TO YOUR BOX</span>
										<QuantityControls
											name={treat.name}
											label={treat.name}
											quantity={getQuantity(treat.name)}
											onAdd={() => addItem(treat.name)}
											onRemove={() => removeItem(treat.name)}
										/>
									</div>
								</div>
							</article>
						</Reveal>
					))}
				</div>
				<p className="collection-note">
					Mix your Halloween treats with any of our classics. Choose your
					cookies, then order your box on WhatsApp.
				</p>
			</div>
		</section>
	);
}
