import { useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import { formatEuro, getNextPack, getPackSave } from "../lib/pricing";
import { buildWhatsAppOrderUrl } from "../lib/whatsapp";
import { WhatsappIcon } from "./icons";
import QuotePrice from "./QuotePrice";

function FloatingOrderButton() {
	const { items, itemCount, quote } = useCart();
	const [visible, setVisible] = useState(false);
	const [attention, setAttention] = useState(false);
	const [forceReveal, setForceReveal] = useState(false);
	const prevCount = useRef(itemCount);
	const nextPack = itemCount > 0 ? getNextPack(itemCount) : null;
	const nextSave = nextPack ? getPackSave(nextPack) : 0;
	const extra = nextPack ? nextPack.quantity - itemCount : 0;
	const statusLine =
		nextSave > 0
			? `Add ${extra} more to save ${formatEuro(nextSave)}`
			: quote.saved > 0
				? `You save ${formatEuro(quote.saved)}`
				: "Mix any flavors";

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 120);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (itemCount <= prevCount.current) {
			prevCount.current = itemCount;
			return;
		}

		setAttention(true);
		setForceReveal(true);

		const attentionTimer = setTimeout(() => setAttention(false), 700);
		const revealTimer = setTimeout(() => setForceReveal(false), 2800);

		prevCount.current = itemCount;

		return () => {
			clearTimeout(attentionTimer);
			clearTimeout(revealTimer);
		};
	}, [itemCount]);

	const hasCart = itemCount > 0;
	const isShown = hasCart || visible || forceReveal;
	const cookieLabel = itemCount === 1 ? "cookie" : "cookies";

	return (
		<div
			className={`fixed z-40 transition-all duration-300 ${
				hasCart
					? "inset-x-4 bottom-4 sm:inset-x-auto sm:right-6 sm:bottom-6"
					: "right-6 bottom-6"
			} ${
				isShown
					? "pointer-events-auto translate-y-0 opacity-100"
					: "pointer-events-none translate-y-2 opacity-0"
			}`}
		>
			{hasCart ? (
				<a
					href={buildWhatsAppOrderUrl(items)}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`Order on WhatsApp, ${itemCount} ${cookieLabel}, ${formatEuro(quote.total)}`}
					className="flex items-center gap-3 rounded-2xl border border-brown/15 bg-cream py-3.5 pr-5 pl-4 shadow-lg transition-shadow hover:shadow-xl sm:w-[26rem]"
				>
					<div className="relative shrink-0">
						{attention && (
							<span
								className="pointer-events-none absolute inset-0 rounded-full bg-brown/35 motion-safe:animate-cart-ring"
								aria-hidden="true"
							/>
						)}
						<div
							className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-brown text-cream ${
								attention ? "motion-safe:animate-cart-pop" : ""
							}`}
						>
							<WhatsappIcon className="h-8 w-8" />
							<span
								className={`absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full border border-brown/15 bg-sand px-1 text-[10px] font-semibold text-brown ${
									attention ? "motion-safe:animate-badge-pop" : ""
								}`}
							>
								{itemCount}
							</span>
						</div>
					</div>

					<div className="min-w-0 flex-1">
						<p className="text-[10px] font-medium tracking-[0.2em] text-brown/60">
							YOUR BOX
						</p>
						<p className="mt-0.5 text-sm text-brown">
							<span className="tabular-nums">{itemCount}</span> {cookieLabel}
						</p>
						<p className="mt-0.5 min-h-4 text-xs leading-4 text-brown/60">
							{statusLine}
						</p>
					</div>

					<div className="shrink-0 self-center">
						<QuotePrice
							quote={quote}
							stable
							totalClassName="font-display text-xl"
						/>
					</div>
				</a>
			) : (
				<div className="relative">
					{attention && (
						<span
							className="pointer-events-none absolute inset-0 rounded-full bg-brown/35 motion-safe:animate-cart-ring"
							aria-hidden="true"
						/>
					)}

					<a
						href={buildWhatsAppOrderUrl(items)}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Order on WhatsApp"
						className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-brown text-cream shadow-lg transition-shadow hover:bg-brown/90 hover:shadow-xl ${
							attention ? "motion-safe:animate-cart-pop" : ""
						}`}
					>
						<WhatsappIcon className="h-8 w-8" />
					</a>
				</div>
			)}
		</div>
	);
}

export default FloatingOrderButton;
