import { Link } from "react-router-dom";
import LegalPage from "../components/LegalPage";
import { SITE, SITE_URL } from "../lib/seo";

function Privacy() {
	return (
		<LegalPage title="Privacy Policy" updated="15 July 2026">
			<section>
				<h2>Who we are</h2>
				<p className="mt-3">
					{SITE.name} (&quot;we&quot;, &quot;us&quot;) is a small bakery in{" "}
					{SITE.city}, Spain. This policy explains how we handle personal
					information when you use{" "}
					<a href={SITE_URL}>{SITE_URL.replace(/^https?:\/\//, "")}</a> or
					contact us to order.
				</p>
			</section>

			<section>
				<h2>What we collect</h2>
				<p className="mt-3">
					This website does not have accounts, checkout forms, or a server-side
					order system. Your cart stays only in your browser for the current
					visit and is not stored on our servers.
				</p>
				<p className="mt-3">
					We only receive personal information when you choose to contact us —
					for example by WhatsApp, email, phone, or Instagram — such as:
				</p>
				<ul className="mt-3">
					<li>Your name and contact details</li>
					<li>Delivery or pickup details you share</li>
					<li>Order preferences and message content</li>
				</ul>
			</section>

			<section>
				<h2>How we use your information</h2>
				<p className="mt-3">We use it only to:</p>
				<ul className="mt-3">
					<li>Reply to you and confirm orders</li>
					<li>Arrange delivery or pickup in {SITE.city}</li>
					<li>Keep records needed for accounting or legal requirements</li>
				</ul>
			</section>

			<section>
				<h2>Legal basis</h2>
				<p className="mt-3">
					Under GDPR, we process this information to take steps toward a
					contract (your order), with your consent when you message us, and
					where needed for our legitimate interest in running the bakery and
					helping customers.
				</p>
			</section>

			<section>
				<h2>Third parties</h2>
				<p className="mt-3">
					We do not sell your personal data. Depending on how you contact us,
					your message is also processed by that platform (for example WhatsApp
					or Instagram, operated by Meta). Our site is hosted by a web host.
					Those providers process data under their own policies.
				</p>
				<p className="mt-3">
					If a delivery is arranged through a courier, we share only what is
					needed to complete the delivery.
				</p>
			</section>

			<section>
				<h2>How long we keep data</h2>
				<p className="mt-3">
					We keep order and message details only as long as needed for the order,
					support, and legal requirements, then delete or anonymise them.
				</p>
			</section>

			<section>
				<h2>Your rights</h2>
				<p className="mt-3">
					If you are in the EU/EEA, you can ask to access, correct, delete, or
					restrict your personal data, or object to certain processing. Email{" "}
					<a href={`mailto:${SITE.email}`}>{SITE.email}</a>. You can also complain
					to the Spanish Data Protection Agency (AEPD).
				</p>
			</section>

			<section>
				<h2>Cookies &amp; analytics</h2>
				<p className="mt-3">
					We do not use analytics tools, advertising cookies, or tracking
					cookies on this website.
				</p>
			</section>

			<section>
				<h2>Contact</h2>
				<p className="mt-3">
					Privacy questions:{" "}
					<a href={`mailto:${SITE.email}`}>{SITE.email}</a> or our{" "}
					<Link to="/contact">Contact</Link> page.
				</p>
			</section>
		</LegalPage>
	);
}

export default Privacy;
