import { WHATSAPP_ORDER_URL } from "../lib/whatsapp";
import Button from "./Button";
import FooterColumn from "./FooterColumn";
import { ArrowRightIcon, HeartIcon } from "./icons";
import Logo from "./Logo";

const CONNECT_LINKS = [
	{ label: "Instagram", to: "https://instagram.com/bavobakes.bcn" },
	{ label: "TikTok", to: "https://tiktok.com/@bavobakes.bcn" },
	{ label: "WhatsApp", to: "https://wa.me/666611091" },
	{ label: "Email", to: "mailto:hello@bavobakes.com" },
];

function Footer() {
	return (
		<footer className="bg-cream">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
				<div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
					<div className="flex flex-col items-center gap-6">
						<Logo stacked />
						<Button to={WHATSAPP_ORDER_URL} className="text-center">
							Order on WhatsApp
						</Button>
					</div>

					<div className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 lg:flex lg:gap-20">
						<FooterColumn
							title="SHOP"
							links={[{ label: "All Cookies", to: "/cookies" }]}
						/>
						<FooterColumn
							title="INFO"
							links={[
								{ label: "About Us", to: "/about" },
								{ label: "Contact", to: "/contact" },
							]}
						/>
						<FooterColumn title="CONNECT" links={CONNECT_LINKS} />

						<div>
							<div className="flex items-center gap-2 text-xs font-medium tracking-[0.15em] text-brown/50">
								<span>MADE WITH LOVE</span>
								<HeartIcon className="h-3 w-3 text-brown" />
							</div>
							<p className="mt-4 font-display text-lg text-brown italic">
								in Barcelona
							</p>
							<p className="mt-2 text-sm text-brown/60">
								Thanks for supporting our small business.
							</p>
						</div>

						<div className="col-span-2 sm:col-span-3 lg:w-64">
							<h3 className="text-xs font-medium tracking-[0.15em] text-brown/50">
								STAY IN THE LOOP
							</h3>
							<p className="mt-4 text-sm text-brown/60">
								Be the first to know about new flavors and special offers.
							</p>

							<form className="mt-4 flex items-center gap-2 rounded-full border border-brown/20 p-1 pl-4">
								<input
									type="email"
									placeholder="Your email"
									className="w-full min-w-0 bg-transparent text-sm text-brown placeholder:text-brown/40 focus:outline-none"
								/>
								<button
									type="submit"
									aria-label="Subscribe"
									className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brown text-cream"
								>
									<ArrowRightIcon className="h-4 w-4" />
								</button>
							</form>
						</div>
					</div>
				</div>

				<div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-brown/15 pt-8 text-xs text-brown/60 sm:flex-row">
					<p>© 2024 Bavo Bakes. All rights reserved.</p>
					<div className="flex gap-6">
						<a href="#" className="transition-colors hover:text-brown">
							Privacy Policy
						</a>
						<a href="#" className="transition-colors hover:text-brown">
							Terms &amp; Conditions
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
