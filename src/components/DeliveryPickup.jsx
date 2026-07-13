import DeliveryCard from "./DeliveryCard";
import { BicycleIcon, HeartIcon, StorefrontIcon } from "./icons";

const CARDS = [
	{
		title: "Local Delivery",
		description:
			"We deliver across Barcelona with care. Perfect for birthdays, surprises, or just because.",
		linkLabel: "VIEW DELIVERY INFO",
		icon: BicycleIcon,
	},
	{
		title: "Pickup near Sants",
		description:
			"We're in the Sants / Les Corts area. Message us for exact pickup details.",
		linkLabel: "CONTACT FOR DETAILS",
		linkTo: "/contact",
		icon: StorefrontIcon,
	},
];

function DeliveryPickup() {
	return (
		<section className="bg-cream">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
				<div className="max-w-2xl">
					<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
						<span>DELIVERY & PICKUP</span>
						<HeartIcon className="h-3.5 w-3.5 text-brown" />
					</div>

					<h2 className="mt-4 font-display text-4xl leading-tight text-brown">
						Made for your convenience.
					</h2>

					<p className="mt-4 text-brown/70">
						Whether you want your cookies delivered to your door or prefer to
						pick them up, we&apos;ve got you covered.
					</p>
				</div>

				<div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-stretch lg:gap-8">
					<div className="grid h-full overflow-hidden rounded-2xl border border-brown/15 sm:grid-cols-2">
						{CARDS.map((card, index) => (
							<DeliveryCard
								key={card.title}
								{...card}
								className={
									index === 1 ? "sm:border-l sm:border-brown/15" : ""
								}
							/>
						))}
					</div>

					<div className="relative min-h-72 overflow-hidden lg:h-full lg:min-h-0">
						<img
							src="/img/map.png"
							alt="Illustrated map of Barcelona showing local delivery from Les Corts"
							width={1774}
							height={887}
							loading="lazy"
							className="absolute inset-0 h-full w-full scale-[1.28] object-cover"
						/>
						<div
							aria-hidden="true"
							className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--color-cream),transparent_12%,transparent_88%,var(--color-cream)),linear-gradient(to_bottom,var(--color-cream),transparent_12%,transparent_88%,var(--color-cream))]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default DeliveryPickup;
