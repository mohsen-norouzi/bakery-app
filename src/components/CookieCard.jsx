import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { getCookieImageSrc } from "../lib/cookieImages";
import { hasVeganOption } from "../lib/cookies";
import { formatEuro, getFlavorPrice } from "../lib/pricing";
import DashedRule from "./DashedRule";
import ImagePlaceholder from "./ImagePlaceholder";
import { CookieIcon, LeafIcon, MinusIcon, PlusIcon } from "./icons";

const IMAGE_WIDTH = 480;
const IMAGE_HEIGHT = 480;

function CookieImage({ name, layout }) {
	const src = getCookieImageSrc(name);
	const [failed, setFailed] = useState(!src);
	const className =
		layout === "list"
			? "h-28 w-28 rounded-xl object-contain min-[480px]:h-36 min-[480px]:w-36"
			: "aspect-square w-full object-contain";

	useEffect(() => {
		setFailed(!src);
	}, [src]);

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
			src={src}
			alt={name}
			width={IMAGE_WIDTH}
			height={IMAGE_HEIGHT}
			loading="lazy"
			onError={() => setFailed(true)}
			className={className}
		/>
	);
}

function QuantityControls({
	available,
	quantity,
	label,
	name,
	onAdd,
	onRemove,
}) {
	if (!available) {
		return (
			<button
				type="button"
				disabled
				aria-label={`${name} is not available yet`}
				className="flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full border border-brown/20 text-brown/30"
			>
				<PlusIcon className="h-3.5 w-3.5" />
			</button>
		);
	}

	const open = quantity > 0;

	return (
		<div
			className={`flex h-9 items-center justify-end overflow-hidden rounded-full bg-brown text-cream ${
				open ? "w-[5.25rem]" : "w-9"
			} transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-200`}
		>
			<button
				type="button"
				onClick={onRemove}
				tabIndex={open ? 0 : -1}
				aria-hidden={!open}
				aria-label={`Remove one ${label} from cart`}
				className={`flex h-9 w-8 shrink-0 items-center justify-center rounded-full transition-[opacity,background-color] duration-300 ease-out motion-reduce:transition-none ${
					open
						? "opacity-100 hover:bg-white/10"
						: "pointer-events-none opacity-0"
				}`}
			>
				<MinusIcon className="h-3.5 w-3.5" />
			</button>
			<span
				aria-hidden={!open}
				className={`min-w-4 text-center text-sm font-medium tabular-nums transition-opacity duration-300 ease-out motion-reduce:transition-none ${
					open ? "opacity-100 delay-75" : "opacity-0"
				}`}
			>
				{open ? quantity : ""}
			</span>
			<button
				type="button"
				onClick={onAdd}
				aria-label={
					open ? `Add another ${label} to cart` : `Add ${label} to cart`
				}
				className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-white/10"
			>
				<PlusIcon className="h-3.5 w-3.5" />
			</button>
		</div>
	);
}

function VersionRow({
	label,
	icon: Icon,
	available,
	quantity,
	itemLabel,
	name,
	onAdd,
	onRemove,
}) {
	return (
		<div className="flex h-9 min-w-0 items-center gap-2">
			<span className="flex shrink-0 items-center gap-1.5 text-[10px] font-medium tracking-widest text-brown/70">
				<Icon className="h-3 w-3" />
				{label}
			</span>
			<div className="min-w-4 flex-1">
				<DashedRule />
			</div>
			<div className="shrink-0">
				<QuantityControls
					available={available}
					quantity={quantity}
					label={itemLabel}
					name={name}
					onAdd={onAdd}
					onRemove={onRemove}
				/>
			</div>
		</div>
	);
}

function CookieCard({
	name,
	description,
	badge,
	available = true,
	layout = "grid",
}) {
	const { addItem, removeItem, getQuantity } = useCart();
	const classicQty = getQuantity(name, false);
	const veganQty = getQuantity(name, true);
	const canBeVegan = hasVeganOption(name);
	const isList = layout === "list";

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
		<div
			className={
				isList ? "relative shrink-0" : "relative overflow-hidden rounded-t-2xl"
			}
		>
			<CookieImage name={name} layout={layout} />
			{badgeEl}
		</div>
	);

	const heading = (
		<>
			<div className="flex items-start justify-between gap-3">
				<h3 className="min-w-0 font-display text-lg leading-snug text-brown">
					{name}
				</h3>
				<span
					className={`shrink-0 pt-0.5 text-base font-medium tabular-nums ${
						available ? "text-brown" : "text-brown/40"
					}`}
				>
					{available ? formatEuro(getFlavorPrice(name)) : "Soon"}
				</span>
			</div>
			<p className="mt-1.5 text-sm leading-relaxed text-brown/60">
				{description}
			</p>
		</>
	);

	const actions = (
		<div className={isList ? "mt-4" : "mt-auto pt-4"}>
			{canBeVegan ? (
				<div className="flex flex-col gap-1.5">
					<VersionRow
						label="CLASSIC"
						icon={CookieIcon}
						available={available}
						quantity={classicQty}
						itemLabel={name}
						name={name}
						onAdd={() => addItem(name, false)}
						onRemove={() => removeItem(name, false)}
					/>
					<VersionRow
						label="VEGAN"
						icon={LeafIcon}
						available={available}
						quantity={veganQty}
						itemLabel={`vegan ${name}`}
						name={name}
						onAdd={() => addItem(name, true)}
						onRemove={() => removeItem(name, true)}
					/>
				</div>
			) : (
				<div className="flex justify-end">
					<QuantityControls
						available={available}
						quantity={classicQty}
						label={name}
						name={name}
						onAdd={() => addItem(name, false)}
						onRemove={() => removeItem(name, false)}
					/>
				</div>
			)}
		</div>
	);

	const cardClass = `rounded-2xl bg-sand${available ? "" : " opacity-90"}`;

	if (isList) {
		return (
			<div
				className={`flex flex-col gap-4 p-4 min-[480px]:flex-row min-[480px]:gap-5 min-[480px]:p-5 ${cardClass}`}
			>
				{imageEl}
				<div className="flex min-w-0 flex-1 flex-col justify-center">
					{heading}
					{actions}
				</div>
			</div>
		);
	}

	return (
		<div className={`flex h-full flex-col ${cardClass}`}>
			{imageEl}
			<div className="flex flex-1 flex-col px-4 pt-3 pb-5 sm:px-5">
				{heading}
				{actions}
			</div>
		</div>
	);
}

export default CookieCard;
