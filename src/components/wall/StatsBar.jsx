import { GiftIcon, HeartIcon, SmileyIcon } from "../icons";

const ICONS = {
	heart: HeartIcon,
	smiley: SmileyIcon,
	gift: GiftIcon,
};

/**
 * The tally, written on the taped card in /img/feedbacks/stats.png.
 *
 * The card art is a background rather than an <img> so one element can carry
 * both layouts: from `sm` up the three figures sit side by side on the card,
 * inside its stitching and clear of the tape (which reaches 12.8% down). Below
 * `sm` they stack, which would stretch the card well past its 1832×859 shape,
 * so there the plain sand card is used instead.
 */
function StatsBar({ stats }) {
	return (
		<div className="rounded-2xl bg-sand px-6 py-8 sm:flex sm:aspect-[1832/859] sm:flex-col sm:justify-center sm:rounded-none sm:bg-[url('/img/feedbacks/stats.png')] sm:bg-[length:100%_100%] sm:bg-transparent sm:bg-no-repeat sm:px-[12%] sm:pt-[14%] sm:pb-[9%]">
			<div className="grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-brown/15">
				{stats.map((stat) => {
					const Icon = ICONS[stat.icon] ?? HeartIcon;

					return (
						<div
							key={stat.id}
							className="flex flex-col items-center gap-2 text-center sm:px-2"
						>
							<Icon className="h-6 w-6 shrink-0 text-brown" />
							<span className="text-xl font-medium tracking-wide tabular-nums text-brown">
								{stat.value}
							</span>
							<span className="text-[11px] font-medium tracking-[0.14em] whitespace-nowrap text-brown/70 uppercase">
								{stat.label}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default StatsBar;
