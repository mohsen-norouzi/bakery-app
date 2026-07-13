import { Link } from "react-router-dom";

const linkClassName =
	"text-sm text-brown/70 transition-colors hover:text-brown";

function FooterColumn({ title, links }) {
	return (
		<div>
			<h3 className="text-xs font-medium tracking-[0.15em] text-brown/50">
				{title}
			</h3>
			<ul className="mt-4 space-y-3">
				{links.map((link) => {
					const isExternal = /^(https?:|mailto:|tel:)/.test(link.to);

					return (
						<li key={link.label}>
							{isExternal ? (
								<a
									href={link.to}
									target={link.to.startsWith("http") ? "_blank" : undefined}
									rel={
										link.to.startsWith("http")
											? "noopener noreferrer"
											: undefined
									}
									className={linkClassName}
								>
									{link.label}
								</a>
							) : (
								<Link to={link.to} className={linkClassName}>
									{link.label}
								</Link>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default FooterColumn;
