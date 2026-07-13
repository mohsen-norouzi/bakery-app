import FaqItem from "./FaqItem";
import ImagePlaceholder from "./ImagePlaceholder";
import { ArrowRightIcon, HeartIcon } from "./icons";

const FAQS = [
	{
		question: "How do I place an order?",
		answer:
			"Send us a message through Instagram DM or our contact form and we'll confirm your order and pickup or delivery details.",
	},
	{
		question: "How long do cookies stay fresh?",
		answer:
			"Enjoy them within 5 days at room temperature, or freeze them for up to 2 months.",
	},
	{
		question: "Do you offer local delivery?",
		answer:
			"Yes! We deliver across Barcelona. Just let us know your address when you order.",
	},
	{
		question: "Can I pick up my order?",
		answer:
			"Of course — pickup is available at our kitchen in Les Corts, Barcelona.",
	},
	{
		question: "Do you offer gift notes?",
		answer:
			"Yes, add a personal note at checkout and we'll include it in your package.",
	},
	{
		question: "Are your cookies suitable for gifting?",
		answer: "Absolutely — every order comes beautifully wrapped and ready to gift.",
	},
];

function FaqSection() {
	return (
		<section className="bg-cream">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
				<div className="grid gap-12 lg:grid-cols-[360px_1fr] lg:gap-10">
					<div>
						<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
							<span>FAQ</span>
							<HeartIcon className="h-3.5 w-3.5 text-brown" />
						</div>

						<h2 className="mt-4 font-display text-4xl leading-tight text-brown">
							Frequently asked
							<br />
							<span className="italic">questions.</span>
						</h2>

						<p className="mt-4 text-brown/70">
							Everything you need to know about our cookies, orders, and
							delivery.
						</p>

						<a
							href="#"
							className="mt-6 inline-flex items-center gap-2 border-b border-brown/40 pb-1 text-xs font-medium tracking-[0.15em] text-brown"
						>
							VIEW ALL FAQS
							<ArrowRightIcon className="h-4 w-4" />
						</a>

						<ImagePlaceholder
							width={400}
							height={140}
							label="400×140 (mascot + heart)"
							className="mt-10 hidden w-full max-w-sm lg:block"
						/>
					</div>

					<div className="rounded-2xl bg-sand px-8">
						{FAQS.map((faq) => (
							<FaqItem key={faq.question} {...faq} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default FaqSection;
