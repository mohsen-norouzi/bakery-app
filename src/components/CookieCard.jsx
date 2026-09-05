import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { getCookieImageSrc } from "../lib/cookieImages";
import { hasVeganOption } from "../lib/cookies";
import { formatEuro, getFlavorPrice } from "../lib/pricing";
import ImagePlaceholder from "./ImagePlaceholder";
import { MinusIcon, PlusIcon } from "./icons";

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

function VersionPicker({ name, vegan, onChange }) {
	return (
		<fieldset className="relative m-0 grid h-9 min-w-[7.25rem] max-w-36 flex-1 grid-cols-2 items-center overflow-hidden rounded-full border border-brown/20 p-0.5 text-[10px] font-medium tracking-widest">
			<legend className="sr-only">{name} version</legend>
			<span
				aria-hidden="true"
				className={`absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-brown transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none ${
					vegan ? "translate-x-full" : "translate-x-0"
				}`}
			/>

			{[
				{ value: false, text: "CLASSIC" },
				{ value: true, text: "VEGAN" },
			].map((option) => (
				<button
					key={option.text}
					type="button"
					aria-pressed={vegan === option.value}
					onClick={() => onChange(option.value)}
					className={`relative z-10 h-full rounded-full px-1 transition-colors duration-200 ${
						vegan === option.value
							? "text-cream"
							: "text-brown/55 hover:text-brown"
					}`}
				>
					{option.text}
				</button>
			))}
		</fieldset>
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
				className="flex h-9 w-9 shrink-0 cursor-not-allowed items-center justify-center rounded-full border border-brown/20 text-brown/30"
			>
				<PlusIcon className="h-3.5 w-3.5" />
			</button>
		);
	}

	if (quantity > 0) {
		return (
			<div className="flex h-9 shrink-0 items-center rounded-full bg-brown text-cream">
				<button
					type="button"
					onClick={onRemove}
					aria-label={`Remove one ${label} from cart`}
					className="flex h-9 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/10"
				>
					<MinusIcon className="h-3.5 w-3.5" />
				</button>
				<span className="min-w-4 text-center text-sm font-medium tabular-nums">
					{quantity}
				</span>
				<button
					type="button"
					onClick={onAdd}
					aria-label={`Add another ${label} to cart`}
					className="flex h-9 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/10"
				>
					<PlusIcon className="h-3.5 w-3.5" />
				</button>
			</div>
		);
	}

	return (
		<button
			type="button"
			onClick={onAdd}
			aria-label={`Add ${label} to cart`}
			className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brown text-cream transition-colors hover:bg-brown/90"
		>
			<PlusIcon className="h-3.5 w-3.5" />
		</button>
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
	const [vegan, setVegan] = useState(false);

	// the +/- buttons act on whichever version is selected; the other stays in
	// the box on its own line
	const quantity = getQuantity(name, vegan);
	const otherQuantity = getQuantity(name, !vegan);
	const canBeVegan = hasVeganOption(name);
	const isList = layout === "list";
	const label = vegan ? `vegan ${name}` : name;

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
			{otherQuantity > 0 && (
				<p className="mb-2 text-[10px] leading-4 tracking-[0.04em] text-brown/45">
					{otherQuantity} {vegan ? "classic" : "vegan"} already in your box
				</p>
			)}
			<div className="flex items-center gap-2">
				{canBeVegan && available && (
					<VersionPicker name={name} vegan={vegan} onChange={setVegan} />
				)}
				<div className="ml-auto shrink-0">
					<QuantityControls
						available={available}
						quantity={quantity}
						label={label}
						name={name}
						onAdd={() => addItem(name, vegan)}
						onRemove={() => removeItem(name, vegan)}
					/>
				</div>
			</div>
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
