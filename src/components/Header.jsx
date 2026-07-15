import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { buildWhatsAppOrderUrl } from "../lib/whatsapp";
import Button from "./Button";
import { ArrowRightIcon, BagIcon, CloseIcon, InstagramIcon, ListIcon } from "./icons";
import Logo from "./Logo";

const NAV_LINKS = [
	{ label: "Home", to: "/" },
	{ label: "Cookies", to: "/cookies" },
	{ label: "About", to: "/about" },
	{ label: "Contact", to: "/contact" },
];

function navLinkClass({ isActive }) {
	return `text-xs font-medium tracking-[0.15em] transition-colors hover:text-brown ${
		isActive ? "border-b border-brown text-brown" : "text-brown/80"
	}`;
}

function mobileNavLinkClass({ isActive }) {
	return `block py-5 font-display text-3xl transition-colors ${
		isActive ? "text-brown italic" : "text-brown/75 hover:text-brown"
	}`;
}

const MENU_ANIMATION_MS = 350;

function Header() {
	const { items, itemCount } = useCart();
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuClosing, setMenuClosing] = useState(false);
	const menuVisible = menuOpen || menuClosing;
	const menuActive = menuOpen && !menuClosing;

	const closeMenu = () => {
		if (!menuOpen || menuClosing) return;
		setMenuClosing(true);
		window.setTimeout(() => {
			setMenuOpen(false);
			setMenuClosing(false);
		}, MENU_ANIMATION_MS);
	};

	const openMenu = () => {
		setMenuClosing(false);
		setMenuOpen(true);
	};

	useEffect(() => {
		if (!menuVisible) return;

		const html = document.documentElement;
		const { body } = document;
		const previousHtmlOverflow = html.style.overflow;
		const previousBodyOverflow = body.style.overflow;

		html.style.overflow = "hidden";
		body.style.overflow = "hidden";

		const preventTouchScroll = (event) => {
			const nav = document.getElementById("mobile-nav");
			if (nav?.contains(event.target)) return;
			event.preventDefault();
		};

		document.addEventListener("touchmove", preventTouchScroll, {
			passive: false,
		});

		return () => {
			html.style.overflow = previousHtmlOverflow;
			body.style.overflow = previousBodyOverflow;
			document.removeEventListener("touchmove", preventTouchScroll);
		};
	}, [menuVisible]);

	return (
		<header className="relative z-40">
			<div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-4 sm:px-6 sm:py-6 lg:grid-cols-[auto_1fr_auto] lg:gap-6 lg:px-10">
				<Logo compact onNavigate={closeMenu} />

				<nav className="hidden justify-self-center lg:block" aria-label="Main">
					<ul className="flex items-center gap-9">
						{NAV_LINKS.map((link) => (
							<li key={link.label}>
								<NavLink to={link.to} end className={navLinkClass}>
									{link.label.toUpperCase()}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>

				<div className="flex items-center gap-2 justify-self-end">
					<div className="relative shrink-0">
						<Button
							variant="outline"
							to={buildWhatsAppOrderUrl(items)}
							aria-label={`Order now${itemCount > 0 ? `, ${itemCount} items in cart` : ""}`}
							className="max-sm:!size-11 max-sm:!p-0 sm:px-7 sm:py-3.5"
						>
							<BagIcon className="size-6 shrink-0 sm:size-4" />
							<span className="hidden sm:inline">
								ORDER NOW{itemCount > 0 ? ` (${itemCount})` : ""}
							</span>
						</Button>
						{itemCount > 0 && (
							<span className="pointer-events-none absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brown px-1 text-[10px] font-semibold text-cream sm:hidden">
								{itemCount}
							</span>
						)}
					</div>

					<button
						type="button"
						onClick={openMenu}
						aria-expanded={menuOpen}
						aria-controls="mobile-nav"
						aria-label="Open menu"
						className="flex size-11 items-center justify-center rounded-xl border border-brown/40 text-brown transition-colors hover:bg-brown/5 lg:hidden"
					>
						<ListIcon className="size-5" />
					</button>
				</div>
			</div>

			{/* Always mounted on small screens so open animation isn't remounted/replayed */}
			<button
				type="button"
				aria-label="Close menu"
				onClick={closeMenu}
				tabIndex={menuVisible ? 0 : -1}
				className={`fixed inset-0 z-50 bg-brown/20 transition-opacity duration-300 lg:hidden ${
					menuActive
						? "opacity-100"
						: "pointer-events-none opacity-0"
				}`}
			/>

			<div
				className={`fixed inset-0 z-[60] overflow-hidden lg:hidden ${
					menuVisible ? "" : "pointer-events-none invisible"
				}`}
				aria-hidden={!menuActive}
			>
				<nav
					id="mobile-nav"
					className={`flex h-full w-full flex-col overflow-y-auto overscroll-none bg-cream px-6 pb-10 transition-transform duration-[350ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${
						menuActive ? "translate-x-0" : "translate-x-full"
					}`}
					aria-label="Main"
				>
					<div className="flex items-center justify-between py-4">
						<Logo compact onNavigate={closeMenu} />
						<button
							type="button"
							onClick={closeMenu}
							aria-label="Close menu"
							className="flex size-11 items-center justify-center rounded-xl border border-brown/40 text-brown transition-colors hover:bg-brown/5"
						>
							<CloseIcon className="size-5" />
						</button>
					</div>

					<p
						className={`max-w-xs font-display text-2xl leading-snug text-brown transition-[opacity,transform] duration-500 ease-out ${
							menuActive
								? "translate-x-0 opacity-100 delay-[60ms]"
								: "translate-x-4 opacity-0"
						}`}
					>
						Homemade cookies,
						<span className="text-tan italic"> made with love.</span>
					</p>

					<ul className="mt-8 divide-y divide-brown/10 border-y border-brown/10">
						{NAV_LINKS.map((link, index) => (
							<li
								key={link.label}
								className={`transition-[opacity,transform] duration-500 ease-out ${
									menuActive
										? "translate-x-0 opacity-100"
										: "translate-x-4 opacity-0"
								}`}
								style={{
									transitionDelay: menuActive ? `${120 + index * 70}ms` : "0ms",
								}}
							>
								<NavLink
									to={link.to}
									end
									className={mobileNavLinkClass}
									onClick={closeMenu}
									tabIndex={menuActive ? 0 : -1}
								>
									{link.label}
								</NavLink>
							</li>
						))}
					</ul>

					<div
						className={`mt-10 transition-[opacity,transform] duration-500 ease-out ${
							menuActive
								? "translate-x-0 opacity-100"
								: "translate-x-4 opacity-0"
						}`}
						style={{
							transitionDelay: menuActive
								? `${120 + NAV_LINKS.length * 70}ms`
								: "0ms",
						}}
					>
						<Button
							variant="solid"
							to={buildWhatsAppOrderUrl(items)}
							className="w-full"
							onClick={closeMenu}
							tabIndex={menuActive ? 0 : -1}
						>
							ORDER NOW{itemCount > 0 ? ` (${itemCount})` : ""}
							<ArrowRightIcon className="h-4 w-4" />
						</Button>

						<a
							href="https://instagram.com/bavobakes"
							target="_blank"
							rel="noopener noreferrer"
							tabIndex={menuActive ? 0 : -1}
							className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] text-brown/70 transition-colors hover:text-brown"
						>
							<InstagramIcon className="h-4 w-4" />
							BAVOBAKES
						</a>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Header;
