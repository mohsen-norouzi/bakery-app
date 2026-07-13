function FooterColumn({ title, links }) {
	return (
		<div>
			<h3 className="text-xs font-medium tracking-[0.15em] text-brown/50">
				{title}
			</h3>
			<ul className="mt-4 space-y-3">
				{links.map((link) => (
					<li key={link}>
						<a
							href="#"
							className="text-sm text-brown/70 transition-colors hover:text-brown"
						>
							{link}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default FooterColumn;
