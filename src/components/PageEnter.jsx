import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageEnter({ children }) {
	const location = useLocation();
	const { pathname } = location;

	useEffect(() => {
		const { hash } = location;
		if (hash) {
			const target = document.getElementById(hash.slice(1));
			target?.scrollIntoView({ behavior: "instant", block: "start" });
		} else {
			window.scrollTo({ top: 0, behavior: "instant" });
		}
	}, [location]);

	return (
		<div
			key={pathname}
			className="motion-safe:animate-page-enter"
			style={{ animationFillMode: "both" }}
		>
			{children}
		</div>
	);
}

export default PageEnter;
