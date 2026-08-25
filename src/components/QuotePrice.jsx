import { formatEuro } from "../lib/pricing";

function QuotePrice({
	quote,
	tone = "brown",
	totalClassName = "",
	stable = false,
}) {
	if (quote.count <= 0) return null;

	const wasClass = tone === "cream" ? "text-cream/40" : "text-brown/35";
	const totalClass =
		tone === "cream"
			? "font-medium tabular-nums text-cream"
			: "font-medium tabular-nums text-brown";

	if (stable) {
		return (
			<span className="flex flex-col items-end tracking-normal">
				<span
					className={`h-4 text-sm leading-4 ${
						quote.saved > 0 ? wasClass : "invisible"
					}`}
					aria-hidden={quote.saved <= 0}
				>
					<del>
						<span className="sr-only">Was </span>
						{formatEuro(quote.was)}
					</del>
				</span>
				<span className={`leading-none ${totalClass} ${totalClassName}`}>
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
				{formatEuro(quote.total)}
			</span>
		</span>
	);
}

export default QuotePrice;
