import { MinusIcon, PlusIcon } from "./icons";

export default function QuantityControls({
	available = true,
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
