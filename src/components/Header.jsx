import { NavLink } from "react-router-dom";
import Button from "./Button";
import { BagIcon } from "./icons";
import Logo from "./Logo";

const NAV_LINKS = [
	{ label: "Home", to: "/" },
	{ label: "Cookies", to: "/cookies" },
	{ label: "About", to: "/about" },
	{ label: "Contact", to: "/contact" },
];

function Header() {
	return (
		<header>
			<div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-6 lg:px-10">
				<Logo />

				<nav className="hidden justify-self-center lg:block">
					<ul className="flex items-center gap-9">
						{NAV_LINKS.map((link) => (
							<li key={link.label}>
								<NavLink
									to={link.to}
									end
									className={({ isActive }) =>
										`text-xs font-medium tracking-[0.15em] text-brown/80 transition-colors hover:text-brown ${
											isActive
												? "border-b border-brown text-brown"
												: ""
										}`
									}
								>
									{link.label.toUpperCase()}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>

				<div className="justify-self-end">
					<Button variant="outline">
						<BagIcon />
						ORDER NOW
					</Button>
				</div>
			</div>
		</header>
	);
}

export default Header;
