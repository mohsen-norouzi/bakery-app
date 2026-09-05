import { useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import {
	formatCartContents,
	formatEuro,
	getNextPack,
	getPackSave,
} from "../lib/pricing";
import { buildWhatsAppOrderUrl } from "../lib/whatsapp";
import { WhatsappIcon } from "./icons";
import QuotePrice from "./QuotePrice";

function FloatingOrderButton() {
	const { items, itemCount, quote } = useCart();
	const [visible, setVisible] = useState(false);
	const [attention, setAttention] = useState(false);
	const [forceReveal, setForceReveal] = useState(false);
	const prevCount = useRef(itemCount);
	const nextPack =
		quote.cookieCount > 0 ? getNextPack(quote.cookieCount) : null;
	const nextSave = nextPack ? getPackSave(nextPack) : 0;
	const extra = nextPack ? nextPack.quantity - quote.cookieCount : 0;
	const statusLine =
		nextSave > 0
			? `Add ${extra} more to save ${formatEuro(nextSave)}`
			: quote.saved > 0
				? `You save ${formatEuro(quote.saved)}`
				: quote.brownieCount > 0
					? "€4.50 each"
					: "Mix any flavors";
	const contentsLabel = formatCartContents(quote);

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

	return (
		<div
			className={`fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6 ${
				isShown
					? "pointer-events-auto translate-y-0 opacity-100"
					: "pointer-events-none translate-y-3 opacity-0"
			} transition-[opacity,translate] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none`}
		>
			<a
				href={buildWhatsAppOrderUrl(items)}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={
					hasCart
						? `Order on WhatsApp, ${contentsLabel}, ${formatEuro(quote.total)}`
						: "Order on WhatsApp"
				}
				className={`flex items-center overflow-hidden shadow-lg hover:shadow-xl ${
					hasCart
						? "h-[5.5rem] w-[min(26rem,calc(100vw-2rem))] rounded-[1.25rem] border border-brown/15 bg-cream pl-2 pr-5"
						: "h-16 w-16 rounded-[2rem] bg-brown"
				} transition-[width,height,border-radius,padding,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-200`}
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
						{hasCart && (
							<span
								className={`absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full border border-brown/15 bg-sand px-1 text-[10px] font-semibold text-brown ${
									attention ? "motion-safe:animate-badge-pop" : ""
								}`}
							>
								{itemCount}
							</span>
						)}
					</div>
				</div>

				<div
					className={`flex min-w-0 flex-1 items-center justify-between gap-3 overflow-hidden ${
						hasCart ? "ml-1 px-3 opacity-100 delay-75" : "px-0 opacity-0"
					} transition-[opacity,margin,padding] duration-300 ease-out motion-reduce:transition-none`}
				>
					<div className="min-w-0 flex-1">
						<p className="text-[10px] font-medium tracking-[0.2em] text-brown/60">
							YOUR BOX
						</p>
						<p className="mt-0.5 truncate text-sm text-brown">
							{contentsLabel}
						</p>
						<p className="mt-0.5 min-h-4 truncate text-xs leading-4 text-brown/60">
							{statusLine}
						</p>
					</div>
					<div className="shrink-0">
						<QuotePrice
							quote={quote}
							stable
							totalClassName="font-display text-xl"
						/>
					</div>
				</div>
			</a>
		</div>
	);
}

export default FloatingOrderButton;
