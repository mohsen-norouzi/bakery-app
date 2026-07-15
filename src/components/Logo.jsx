import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Logo({ stacked = false, large = false, compact = false, onNavigate }) {
	const titleRef = useRef(null);
	const taglineRef = useRef(null);

	const iconSize = large ? "h-12" : compact ? "h-8" : "h-10";
	const titleSize = large ? "text-2xl" : compact ? "text-xl" : "text-3xl";
	const taglineClass = large
		? "mt-1.5 flex text-[10px] tracking-[0.08em]"
		: compact && !stacked
			? "mt-1 hidden text-[10px] tracking-[0.08em] sm:flex"
			: "mt-1.5 flex text-[10px] tracking-[0.08em]";

	useLayoutEffect(() => {
		const sync = () => {
			const title = titleRef.current;
			const tagline = taglineRef.current;
			if (!title || !tagline) return;

			tagline.style.width = `${title.getBoundingClientRect().width}px`;
		};

		sync();
		document.fonts?.ready?.then(sync);

		const observer = new ResizeObserver(sync);
		if (titleRef.current) observer.observe(titleRef.current);
		return () => observer.disconnect();
	}, [compact, large, titleSize]);

	return (
		<Link
			to="/"
			onClick={onNavigate}
			className={`flex min-w-0 items-center ${
				stacked ? "flex-col gap-3" : compact ? "gap-2" : "gap-3"
			}`}
		>
			<img
				src="/img/logo.png"
				alt=""
				aria-hidden="true"
				className={`w-auto shrink-0 ${iconSize}`}
			/>
			<span
				className={`inline-flex flex-col leading-none ${stacked ? "mx-auto items-center" : "items-start"}`}
			>
				<span
					ref={titleRef}
					className={`whitespace-nowrap font-logo tracking-[0.1em] text-brown ${titleSize}`}
				>
					Bavo <span className="text-tan">Bakes</span>
				</span>
				<span
					ref={taglineRef}
					className={`justify-between text-brown/60 uppercase ${taglineClass} ${compact && !stacked ? "" : "flex"}`}
				>
					<span>Homemade</span>
					<span aria-hidden="true">•</span>
					<span>Cookies</span>
				</span>
			</span>
		</Link>
	);
}

export default Logo;
