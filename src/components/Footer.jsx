import FooterColumn from "./FooterColumn";
import { HeartIcon } from "./icons";
import Logo from "./Logo";

const CONNECT_LINKS = [
	{ label: "Instagram", to: "https://instagram.com/bavobakes" },
	{ label: "TikTok", to: "https://tiktok.com/@bavobakes.bcn" },
	{ label: "WhatsApp", to: "https://wa.me/666611091" },
	{ label: "Email", to: "mailto:hello@bavobakes.com" },
];

function Footer() {
	return (
		<footer className="bg-cream">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
				<div className="grid gap-12 lg:grid-cols-[minmax(0,220px)_1fr] lg:items-start lg:gap-16">
					<div className="flex justify-center lg:justify-start">
						<Logo stacked large />
					</div>

					<div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-4">
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
							<p className="mt-4 font-display text-base text-brown italic">
								in Barcelona
							</p>
							<p className="mt-2 text-sm text-brown/60">
								Thanks for supporting our small business.
							</p>
						</div>
					</div>
				</div>

				<div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-brown/15 pt-8 text-xs text-brown/60 sm:flex-row">
					<p>© 2024 Bavo Bakes. All rights reserved.</p>
					<div className="flex gap-6">
						<a href="/contact" className="transition-colors hover:text-brown">
							Privacy Policy
						</a>
						<a href="/contact" className="transition-colors hover:text-brown">
							Terms &amp; Conditions
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
