import { useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import { buildWhatsAppOrderUrl } from "../lib/whatsapp";
import { WhatsappIcon } from "./icons";

function FloatingOrderButton() {
	const { items, itemCount } = useCart();
	const [visible, setVisible] = useState(false);
	const [attention, setAttention] = useState(false);
	const [forceReveal, setForceReveal] = useState(false);
	const prevCount = useRef(itemCount);

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

	const isShown = visible || forceReveal;

	return (
		<div
			className={`fixed right-6 bottom-6 z-40 transition-all duration-300 ${
				isShown
					? "pointer-events-auto translate-y-0 opacity-100"
					: "pointer-events-none translate-y-2 opacity-0"
			}`}
		>
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
					aria-label={
						itemCount > 0
							? `Order on WhatsApp (${itemCount} items)`
							: "Order on WhatsApp"
					}
					className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-brown text-cream shadow-lg transition-shadow hover:bg-brown/90 hover:shadow-xl ${
						attention ? "motion-safe:animate-cart-pop" : ""
					}`}
				>
					<WhatsappIcon className="h-8 w-8" />
					{itemCount > 0 && (
						<span
							className={`absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full border border-brown/15 bg-cream px-1 text-[10px] font-semibold text-brown ${
								attention ? "motion-safe:animate-badge-pop" : ""
							}`}
						>
							{itemCount}
						</span>
					)}
				</a>
			</div>
		</div>
	);
}

export default FloatingOrderButton;
