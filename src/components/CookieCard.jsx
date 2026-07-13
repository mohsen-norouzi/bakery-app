import { useState } from "react";
import { useCart } from "../context/CartContext";
import { getCookieImageSrc } from "../lib/cookieImages";
import ImagePlaceholder from "./ImagePlaceholder";
import { MinusIcon, PlusIcon } from "./icons";

const IMAGE_WIDTH = 480;
const IMAGE_HEIGHT = 480;

function CookieImage({ name, layout }) {
	const [failed, setFailed] = useState(false);
	const className =
		layout === "list"
			? "h-36 w-36 rounded-xl object-contain"
			: "aspect-square w-full object-contain";

	if (failed) {
		return (
			<ImagePlaceholder
				width={IMAGE_WIDTH}
				height={IMAGE_HEIGHT}
				label="480×480"
				className={className}
			/>
		);
	}

	return (
		<img
			src={getCookieImageSrc(name)}
			alt={name}
			width={IMAGE_WIDTH}
			height={IMAGE_HEIGHT}
			loading="lazy"
			onError={() => setFailed(true)}
			className={className}
		/>
	);
}

function CookieCard({
	name,
	description,
	badge,
	available = true,
	layout = "grid",
}) {
	const { items, addItem, removeItem } = useCart();
	const quantity = items.find((item) => item.name === name)?.quantity ?? 0;

	const cartControls = !available ? (
		<button
			type="button"
			disabled
			aria-label={`${name} is not available yet`}
			className="flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-full border border-brown/20 text-brown/30"
		>
			<PlusIcon className="h-3.5 w-3.5" />
		</button>
	) : quantity > 0 ? (
		<div className="flex items-center gap-2">
			<button
				type="button"
				onClick={() => removeItem(name)}
				aria-label={`Remove one ${name} from cart`}
				className="flex h-8 w-8 items-center justify-center rounded-full border border-brown/30 text-brown transition-colors hover:bg-brown/5"
			>
				<MinusIcon className="h-3.5 w-3.5" />
			</button>
			<span className="w-4 text-center text-sm font-medium text-brown">
				{quantity}
			</span>
			<button
				type="button"
				onClick={() => addItem(name)}
				aria-label={`Add another ${name} to cart`}
				className="flex h-8 w-8 items-center justify-center rounded-full bg-brown text-cream transition-colors hover:bg-brown/90"
			>
				<PlusIcon className="h-3.5 w-3.5" />
			</button>
		</div>
	) : (
		<button
			type="button"
			onClick={() => addItem(name)}
			aria-label={`Add ${name} to cart`}
			className="flex h-8 w-8 items-center justify-center rounded-full border border-brown/30 text-brown transition-colors hover:bg-brown/5"
		>
			<PlusIcon className="h-3.5 w-3.5" />
		</button>
	);

	const badgeEl = !available ? (
		<span className="absolute top-2 left-2 rounded-full bg-cream px-3 py-1 text-[10px] font-medium tracking-widest text-brown/70">
			BAKING SOON
		</span>
	) : (
		badge && (
			<span className="absolute top-2 left-2 rounded-full bg-cream px-3 py-1 text-[10px] font-medium tracking-widest text-brown">
				{badge.toUpperCase()}
			</span>
		)
	);

	const imageEl = (
		<div className="relative shrink-0">
			<CookieImage name={name} layout={layout} />
			{badgeEl}
		</div>
	);

	const cardClass = `overflow-hidden rounded-2xl bg-sand${available ? "" : " opacity-90"}`;
	const textBodyClass = "flex flex-1 flex-col px-5 pb-5 pt-4";

	const footer = (
		<div className="mt-auto flex items-center justify-between pt-4">
			<span
				className={`text-xs font-medium tracking-[0.1em] ${available ? "text-brown/70" : "text-brown/40"}`}
			>
				{available ? "€4.50" : "Soon"}
			</span>
			{cartControls}
		</div>
	);

	if (layout === "list") {
		return (
			<div className={`flex gap-5 p-5 ${cardClass}`}>
				{imageEl}

				<div className="flex min-w-0 flex-1 flex-col justify-center">
					<h3 className="font-display text-lg text-brown">{name}</h3>
					<p className="mt-2 text-sm text-brown/60">{description}</p>
					{footer}
				</div>
			</div>
		);
	}

	return (
		<div className={`flex h-full flex-col ${cardClass}`}>
			<div className="relative">{imageEl}</div>

			<div className={textBodyClass}>
				<h3 className="font-display text-lg text-brown">{name}</h3>
				<p className="mt-2 text-sm text-brown/60">{description}</p>
				{footer}
			</div>
		</div>
	);
}

export default CookieCard;
