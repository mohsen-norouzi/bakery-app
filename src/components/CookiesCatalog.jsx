import { useState } from "react";
import { COOKIES } from "../lib/cookies";
import CookieCard from "./CookieCard";
import CookiePrices from "./CookiePrices";
import { GridIcon, ListIcon } from "./icons";
import Reveal from "./Reveal";
import RevealStagger from "./RevealStagger";
import SortDropdown from "./SortDropdown";

const SORT_OPTIONS = [
	"Most Popular",
	"Price: Low to High",
	"Price: High to Low",
	"Newest",
];

function CookiesCatalog() {
	const [sortBy, setSortBy] = useState(SORT_OPTIONS[0]);
	const [view, setView] = useState("grid");

	return (
		<section className="bg-cream">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
				<Reveal>
					<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<div>
							<h2 className="font-display text-4xl leading-tight text-brown">
								Handmade cookies,
								<br />
								<span className="italic">baked to perfection.</span>
							</h2>
							<p className="mt-4 max-w-md text-brown/70">
								Made with real ingredients, baked fresh in small batches. Mix
								any flavors — boxes of two or more come with a little off.
							</p>
						</div>

						<div className="flex items-center gap-4">
							<div className="flex items-center gap-2 text-sm text-brown/70">
								Sort by
								<SortDropdown
									options={SORT_OPTIONS}
									value={sortBy}
									onChange={setSortBy}
								/>
							</div>

							<div className="flex items-center gap-1 rounded-full border border-brown/20 p-1">
								<button
									type="button"
									onClick={() => setView("grid")}
									aria-label="Grid view"
									aria-pressed={view === "grid"}
									className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
										view === "grid"
											? "bg-brown text-cream"
											: "text-brown hover:bg-brown/5"
									}`}
								>
									<GridIcon className="h-4 w-4" />
								</button>
								<button
									type="button"
									onClick={() => setView("list")}
									aria-label="List view"
									aria-pressed={view === "list"}
									className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
										view === "list"
											? "bg-brown text-cream"
											: "text-brown hover:bg-brown/5"
									}`}
								>
									<ListIcon className="h-4 w-4" />
								</button>
							</div>
						</div>
					</div>
				</Reveal>

				<Reveal className="mt-10">
					<CookiePrices />
				</Reveal>

				<div className="mt-10 border-t border-brown/15 pt-6 text-xs font-medium tracking-widest text-brown/50">
					{COOKIES.length} COOKIES
				</div>

				<RevealStagger
					key={view}
					className={
						view === "grid"
							? "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
							: "mt-8 flex flex-col gap-4"
					}
					stagger={120}
					delay={100}
				>
					{COOKIES.map((cookie) => (
						<CookieCard key={cookie.name} {...cookie} layout={view} />
					))}
				</RevealStagger>
			</div>
		</section>
	);
}

export default CookiesCatalog;
