import { useCart } from "../context/CartContext";
import { formatEuro, PRICE_PACKS } from "../lib/pricing";
import { HeartIcon } from "./icons";
import QuotePrice from "./QuotePrice";

function CookiePrices() {
	const { quote } = useCart();

	return (
		<div
			id="prices"
			className="rounded-2xl bg-sand px-6 py-8 sm:px-8 lg:px-10 lg:py-10"
		>
			<div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
				<div>
					<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
						<span>100G COOKIE PRICES</span>
						<HeartIcon className="h-3.5 w-3.5 text-brown" />
					</div>

					<h3 className="mt-4 font-display text-3xl leading-tight text-brown sm:text-4xl">
						Mix, match,
						<br />
						<span className="italic">save on every box.</span>
					</h3>

					<p className="mt-4 max-w-md text-sm text-brown/70">
						All cookies are 100g and baked fresh for your order. Mix any flavors
						— the price is for the whole box, not each flavor on its own.
					</p>
				</div>

				<div>
					<ul>
						{PRICE_PACKS.map((pack, index) => {
							const isActive = quote.count === pack.quantity;
							const hasDiscount = pack.was != null && pack.was > pack.price;

							return (
								<li key={pack.quantity}>
									<div
										className={`flex items-center justify-between gap-4 px-4 py-3.5 transition-colors ${
											isActive ? "rounded-xl bg-cream" : ""
										}`}
									>
										<span className="text-sm text-brown">
											{pack.quantity}{" "}
											{pack.quantity === 1 ? "cookie" : "cookies"}
										</span>
										<span className="flex items-baseline gap-2.5 text-brown">
											{hasDiscount && (
												<del className="text-sm text-brown/35">
													<span className="sr-only">Was </span>
													{formatEuro(pack.was)}
												</del>
											)}
											<span className="text-sm font-medium tabular-nums tracking-wide">
												{formatEuro(pack.price)}
											</span>
										</span>
									</div>
									{index < PRICE_PACKS.length - 1 && (
										<div
											aria-hidden="true"
											className="h-px w-full"
											style={{
												backgroundImage:
													"repeating-linear-gradient(to right, rgba(82, 44, 9, 0.2) 0 6px, transparent 6px 12px)",
											}}
										/>
									)}
								</li>
							);
						})}
					</ul>

					<div className="mt-6 rounded-xl border border-dashed border-brown/25 px-4 py-3 text-sm text-brown/70">
						Cardamom &amp; Pistachio is +€0.50 per cookie.
					</div>

					{quote.count > 0 && (
						<p className="mt-5 text-sm text-brown">
							Your box: {quote.count} {quote.count === 1 ? "cookie" : "cookies"}{" "}
							· <QuotePrice quote={quote} />
							{quote.saved > 0 && (
								<span className="text-brown/60">
									{` · save ${formatEuro(quote.saved)}`}
								</span>
							)}
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default CookiePrices;
