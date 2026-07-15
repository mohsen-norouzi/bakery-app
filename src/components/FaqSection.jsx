import FaqItem from "./FaqItem";
import Reveal from "./Reveal";
import RevealStagger from "./RevealStagger";
import { HeartIcon } from "./icons";

const FAQS = [
	{
		question: "How do I place an order?",
		answer: (
			<>
				Send us a message on WhatsApp with your order details and
				we&apos;ll confirm your pickup or delivery time. Not on WhatsApp?
				Email{" "}
				<a
					href="mailto:hello@bavobakes.com"
					className="text-brown underline underline-offset-2"
				>
					hello@bavobakes.com
				</a>{" "}
				or DM us on Instagram.
			</>
		),
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
					<Reveal>
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

							<img
								src="/img/faq.png"
								alt="Bavo Bakes cookie box with a Made with love note"
								width={800}
								height={400}
								className="mt-10 hidden w-full max-w-sm object-contain lg:block"
							/>
						</div>
					</Reveal>

					<RevealStagger
						className="rounded-2xl bg-sand px-8 py-2"
						stagger={100}
						delay={120}
					>
						{FAQS.map((faq, index) => (
							<FaqItem
								key={faq.question}
								{...faq}
								showDivider={index < FAQS.length - 1}
							/>
						))}
					</RevealStagger>
				</div>
			</div>
		</section>
	);
}

export default FaqSection;
