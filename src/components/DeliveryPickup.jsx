import DeliveryCard from "./DeliveryCard";
import ImagePlaceholder from "./ImagePlaceholder";
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
		title: "Pickup in Les Corts",
		description:
			"Prefer to pick up? You're welcome! We're located in Les Corts, Barcelona.",
		linkLabel: "VIEW LOCATION",
		icon: StorefrontIcon,
	},
];

function DeliveryPickup() {
	return (
		<section className="bg-cream">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
				<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
					<span>DELIVERY & PICKUP</span>
					<HeartIcon className="h-3.5 w-3.5 text-brown" />
				</div>

				<h2 className="mt-4 font-display text-4xl leading-tight text-brown">
					Made for your convenience.
				</h2>

				<div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_auto]">
					<div className="grid overflow-hidden rounded-2xl border border-brown/15 sm:grid-cols-2">
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

					<ImagePlaceholder
						width={400}
						height={200}
						label="400×200 (mascot + heart)"
						className="hidden h-48 w-96 lg:block"
					/>
				</div>
			</div>
		</section>
	);
}

export default DeliveryPickup;
