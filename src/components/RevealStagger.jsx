import { Children, useEffect, useRef, useState } from "react";

function RevealStagger({
	children,
	className = "",
	itemClassName = "",
	stagger = 140,
	delay = 0,
}) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const reduceMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		if (reduceMotion) {
			setVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return (
		<div ref={ref} className={className}>
			{Children.map(children, (child, index) => (
				<div
					key={child?.key ?? index}
					className={`${itemClassName} ${
						visible
							? "motion-safe:animate-reveal-up"
							: "translate-y-12 opacity-0"
					}`}
					style={
						visible
							? {
									animationDelay: `${delay + index * stagger}ms`,
									animationFillMode: "both",
								}
							: undefined
					}
				>
					{child}
				</div>
			))}
		</div>
	);
}

export default RevealStagger;
