import { GiftIcon, HeartIcon, SmileyIcon } from "../icons";

const ICONS = {
	heart: HeartIcon,
	smiley: SmileyIcon,
	gift: GiftIcon,
};

function StatsBar({ stats }) {
	return (
		<div className="flex flex-wrap items-center justify-center gap-y-6 rounded-3xl bg-[#f3e2cb] px-8 py-6 shadow-[0_18px_34px_-22px_rgba(82,44,9,0.5)]">
			{stats.map((stat, index) => {
				const Icon = ICONS[stat.icon] ?? HeartIcon;

				return (
					<div
						key={stat.id}
						className={`flex flex-1 items-center justify-center gap-3 px-6 ${
							index > 0 ? "sm:border-l sm:border-brown/15" : ""
						}`}
					>
						<Icon className="size-6 shrink-0 text-brown/60" />
						<span>
							<span className="block font-display text-xl text-brown">
								{stat.value}
							</span>
							<span className="block text-xs tracking-[0.08em] text-brown/60">
								{stat.label}
							</span>
						</span>
					</div>
				);
			})}
		</div>
	);
}

export default StatsBar;
