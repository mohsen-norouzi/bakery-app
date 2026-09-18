import { Link } from "react-router-dom";
import { COOKIES } from "../lib/cookies";
import CookieCard from "./CookieCard";
import { Sparkle } from "./HalloweenDecor";
import { ArrowRightIcon } from "./icons";
import Reveal from "./Reveal";

function FeaturedCookies() {
	return (
		<section className="classic-section season-section">
			<div className="season-container">
				<Reveal className="classic-heading">
					<div>
						<p className="season-eyebrow">
							<Sparkle /> ALWAYS A GOOD IDEA
						</p>
						<h2>
							Still your <em>favourites.</em>
						</h2>
						<p>Familiar favourites for every season. Handmade, just for you.</p>
					</div>
					<Link className="season-text-link" to="/cookies#classics">
						Explore all cookies <ArrowRightIcon />
					</Link>
				</Reveal>
				<div className="classic-cookie-grid">
					{COOKIES.slice(0, 3).map((cookie) => (
						<CookieCard key={cookie.name} {...cookie} />
					))}
				</div>
			</div>
		</section>
	);
}
export default FeaturedCookies;
