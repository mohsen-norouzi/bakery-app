import DashedRule from "./DashedRule";
import QuantityControls from "./QuantityControls";

export default function VersionRow({
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
