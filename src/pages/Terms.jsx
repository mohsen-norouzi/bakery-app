import { Link } from "react-router-dom";
import LegalPage from "../components/LegalPage";
import { SITE } from "../lib/seo";

function Terms() {
	return (
		<LegalPage title="Terms & Conditions" updated="15 July 2026">
			<section>
				<h2>About these terms</h2>
				<p className="mt-3">
					These terms apply when you browse {SITE.name} or order homemade cookies
					from us in {SITE.city}, Spain. By placing an order you agree to them.
				</p>
			</section>

			<section>
				<h2>Orders</h2>
				<p className="mt-3">
					Orders are placed through WhatsApp, email, phone, or Instagram — not
					through an online checkout. Adding items to the on-site cart only helps
					build a WhatsApp message; it is not a confirmed order.
				</p>
				<p className="mt-3">
					An order is confirmed when we accept it and agree availability, timing,
					and total with you. We may decline an order if we cannot fulfil it.
				</p>
			</section>

			<section>
				<h2>Products &amp; allergens</h2>
				<p className="mt-3">
					Cookies are handmade in small batches, so appearance may vary from
					photos. Please tell us about allergies before ordering. Ingredient and
					allergen details are available on request.
				</p>
			</section>

			<section>
				<h2>Pricing &amp; payment</h2>
				<p className="mt-3">
					Prices shown on the website are indicative and may change. The final
					price is the one we confirm with you when accepting the order. Payment
					is arranged when we confirm — this site does not process payments
					online.
				</p>
			</section>

			<section>
				<h2>Delivery &amp; pickup</h2>
				<p className="mt-3">
					We offer local delivery across {SITE.city} and pickup from our kitchen
					in Les Corts (Sants area). Exact timing, address, and any delivery
					details are agreed when you order. Please share accurate contact and
					address information and be available at the agreed time.
				</p>
			</section>

			<section>
				<h2>Cancellations &amp; changes</h2>
				<p className="mt-3">
					Because cookies are baked to order, cancellations or changes may not be
					possible once baking has started. Contact us as soon as you can and we
					will help where possible.
				</p>
			</section>

			<section>
				<h2>Freshness</h2>
				<p className="mt-3">
					Cookies are best enjoyed soon after baking. As a guide, enjoy them
					within about 5 days at room temperature, or freeze for longer storage.
					More tips are on our <Link to="/contact">Contact</Link> FAQ, or ask
					when you order.
				</p>
			</section>

			<section>
				<h2>Liability</h2>
				<p className="mt-3">
					Please share allergy information before ordering. To the extent allowed
					by law, we are not responsible for issues arising from allergies we
					were not told about, or from improper storage after delivery or pickup.
				</p>
			</section>

			<section>
				<h2>Website</h2>
				<p className="mt-3">
					Site content is for information. Products, prices, and availability may
					change without notice.
				</p>
			</section>

			<section>
				<h2>Governing law</h2>
				<p className="mt-3">
					These terms are governed by Spanish law. Courts in {SITE.city} have
					jurisdiction, without affecting mandatory consumer rights that apply to
					you.
				</p>
			</section>

			<section>
				<h2>Contact</h2>
				<p className="mt-3">
					Questions?{" "}
					<a href={`mailto:${SITE.email}`}>{SITE.email}</a> or{" "}
					<Link to="/contact">Contact</Link>.
				</p>
			</section>
		</LegalPage>
	);
}

export default Terms;
