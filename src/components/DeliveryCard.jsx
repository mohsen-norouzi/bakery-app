import ImagePlaceholder from "./ImagePlaceholder";
import { ArrowRightIcon } from "./icons";

function DeliveryCard({ title, description, linkLabel, className = "" }) {
	return (
		<div className={`p-8 ${className}`}>
			<div className="flex h-14 w-14 items-center justify-center rounded-full bg-sand">
				<ImagePlaceholder
					width={24}
					height={24}
					label="24×24"
					className="h-6 w-6"
				/>
			</div>

			<h3 className="mt-5 font-display text-lg text-brown">{title}</h3>
			<p className="mt-2 text-sm text-brown/60">{description}</p>

			<a
				href="#"
				className="mt-5 inline-flex items-center gap-2 border-b border-brown/40 pb-1 text-xs font-medium tracking-[0.15em] text-brown"
			>
				{linkLabel}
				<ArrowRightIcon className="h-4 w-4" />
			</a>
		</div>
	);
}

export default DeliveryCard;
