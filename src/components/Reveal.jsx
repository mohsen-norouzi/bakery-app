import { useEffect, useRef, useState } from "react";

function Reveal({
	children,
	className = "",
	delay = 0,
	as: Tag = "div",
	variant = "up",
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
			{ threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	const hiddenClass =
		variant === "fade" ? "opacity-0" : "translate-y-12 opacity-0";
	const visibleClass =
		variant === "fade"
			? "motion-safe:animate-fade-in-soft"
			: "motion-safe:animate-reveal-up";

	return (
		<Tag
			ref={ref}
			className={`${className} ${visible ? visibleClass : hiddenClass}`}
			style={
				visible
					? {
							animationDelay: `${delay}ms`,
							animationFillMode: "both",
						}
					: undefined
			}
		>
			{children}
		</Tag>
	);
}

export default Reveal;
