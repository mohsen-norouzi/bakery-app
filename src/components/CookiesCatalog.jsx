import { useState } from "react";
import CookieCard from "./CookieCard";
import Reveal from "./Reveal";
import RevealStagger from "./RevealStagger";
import { GridIcon, ListIcon } from "./icons";
import SortDropdown from "./SortDropdown";

const SORT_OPTIONS = [
	"Most Popular",
	"Price: Low to High",
	"Price: High to Low",
	"Newest",
];

const COOKIES = [
	{
		name: "Chocolate Chip",
		description: "Classic, soft, and loaded with chocolate.",
		badge: "Best Seller",
	},
	{
		name: "Double Chocolate",
		description: "Rich cocoa dough with double the chocolate.",
		badge: "Popular",
	},
	{
		name: "Chocolate Sea Salt",
		description: "Rich chocolate with a touch of sea salt.",
	},
	{
		name: "Oatmeal & Raisin",
		description: "Chewy oatmeal cookies with sweet raisins.",
		available: false,
	},
	{
		name: "White Chocolate Macadamia",
		description: "Buttery cookies with white chocolate and macadamia.",
		available: false,
	},
	{
		name: "Hazelnut Chocolate",
		description: "Roasted hazelnuts with rich chocolate chunks.",
		available: false,
	},
	{
		name: "Peanut Butter",
		description: "Soft, nutty, and perfectly satisfying.",
		available: false,
	},
	{
		name: "Dark Chocolate Sea Salt",
		description: "Deep dark chocolate with a touch of sea salt.",
		available: false,
	},
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
								Made with real ingredients, baked fresh in small batches, and
								delivered with love.
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

					<div className="mt-8 border-t border-brown/15 pt-6 text-xs font-medium tracking-widest text-brown/50">
						{COOKIES.length} COOKIES
					</div>
				</Reveal>

				<RevealStagger
					key={view}
					className={
						view === "grid"
							? "mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
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
