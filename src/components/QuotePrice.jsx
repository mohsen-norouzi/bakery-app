import { formatEuro } from "../lib/pricing";

function QuotePrice({
	quote,
	tone = "inherit",
	totalClassName = "",
	stable = false,
}) {
	if (quote.count <= 0) return null;

	const colorClass =
		{ cream: "text-cream", brown: "text-brown" }[tone] ?? "text-inherit";
	const wasClass = `${colorClass} opacity-80`;
	const totalClass = `font-medium tabular-nums ${colorClass}`;

	if (stable) {
		return (
			<span className="flex flex-col items-end gap-1 tracking-normal">
				<span
					className={`h-4 text-sm leading-4 ${
						quote.saved > 0 ? wasClass : "invisible"
					}`}
					aria-hidden={quote.saved <= 0}
				>
					<del>Was {formatEuro(quote.was)}</del>
				</span>
				<span className={`leading-none ${totalClass} ${totalClassName}`}>
					{quote.saved > 0 && <span className="sr-only">Now </span>}
					{formatEuro(quote.total)}
				</span>
			</span>
		);
	}

	return (
		<span className="inline-flex items-baseline gap-2 tracking-normal">
			{quote.saved > 0 && (
				<del className={`text-sm ${wasClass}`}>
					<span className="sr-only">Was </span>
					{formatEuro(quote.was)}
				</del>
			)}
			<span className={`${totalClass} ${totalClassName}`}>
				{quote.saved > 0 && <span className="sr-only">Now </span>}
				{formatEuro(quote.total)}
			</span>
		</span>
	);
}

export default QuotePrice;
