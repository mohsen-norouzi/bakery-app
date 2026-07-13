import Button from "./Button";
import CookieCard from "./CookieCard";
import { ArrowDownIcon, GridIcon, ListIcon } from "./icons";

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
		name: "Oatmeal & Raisin",
		description: "Chewy oatmeal cookies with sweet raisins.",
	},
	{
		name: "White Chocolate Macadamia",
		description: "Buttery cookies with white chocolate and macadamia.",
	},
	{
		name: "Dark Chocolate Sea Salt",
		description: "Deep dark chocolate with a touch of sea salt.",
	},
	{
		name: "Hazelnut Chocolate",
		description: "Roasted hazelnuts with rich chocolate chunks.",
	},
	{
		name: "Peanut Butter",
		description: "Soft, nutty, and perfectly satisfying.",
	},
	{
		name: "Chocolate Pretzel",
		description: "Sweet and salty with a satisfying crunch.",
	},
];

function CookiesCatalog() {
	return (
		<section className="bg-cream">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
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
						<label className="flex items-center gap-2 text-sm text-brown/70">
							Sort by
							<select className="rounded-full border border-brown/20 bg-cream px-3 py-1.5 text-sm text-brown focus:outline-none">
								<option>Most Popular</option>
								<option>Price: Low to High</option>
								<option>Price: High to Low</option>
								<option>Newest</option>
							</select>
						</label>

						<div className="flex items-center gap-1 rounded-full border border-brown/20 p-1">
							<button
								type="button"
								aria-label="Grid view"
								className="flex h-8 w-8 items-center justify-center rounded-full bg-brown text-cream"
							>
								<GridIcon className="h-4 w-4" />
							</button>
							<button
								type="button"
								aria-label="List view"
								className="flex h-8 w-8 items-center justify-center rounded-full text-brown transition-colors hover:bg-brown/5"
							>
								<ListIcon className="h-4 w-4" />
							</button>
						</div>
					</div>
				</div>

				<div className="mt-8 border-t border-brown/15 pt-6 text-xs font-medium tracking-widest text-brown/50">
					{COOKIES.length} COOKIES
				</div>

				<div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
					{COOKIES.map((cookie) => (
						<CookieCard key={cookie.name} {...cookie} />
					))}
				</div>

				<div className="mt-12 flex justify-center">
					<Button variant="outline">
						LOAD MORE COOKIES
						<ArrowDownIcon className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</section>
	);
}

export default CookiesCatalog;
