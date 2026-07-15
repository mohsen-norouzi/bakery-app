import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageEnter({ children }) {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

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
