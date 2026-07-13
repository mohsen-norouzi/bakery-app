import { useCart } from "../context/CartContext";
import ImagePlaceholder from "./ImagePlaceholder";
import { MinusIcon, PlusIcon } from "./icons";

function CookieCard({ name, description, badge }) {
	const { items, addItem, removeItem } = useCart();
	const quantity = items.find((item) => item.name === name)?.quantity ?? 0;

	return (
		<div className="flex h-full flex-col rounded-2xl bg-sand p-4">
			<div className="relative">
				<ImagePlaceholder
					width={400}
					height={400}
					label="400×400"
					className="rounded-xl"
				/>
				{badge && (
					<span className="absolute top-3 left-3 rounded-full bg-cream px-3 py-1 text-[10px] font-medium tracking-widest text-brown">
						{badge.toUpperCase()}
					</span>
				)}
			</div>

			<h3 className="mt-4 font-display text-lg text-brown">{name}</h3>
			<p className="mt-1 text-sm text-brown/60">{description}</p>

			<div className="mt-auto flex items-center justify-between pt-4">
				<span className="text-xs font-medium tracking-[0.1em] text-brown/70">
					€4.50
				</span>

				{quantity > 0 ? (
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
				)}
			</div>
		</div>
	);
}

export default CookieCard;
