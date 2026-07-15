import { useEffect, useRef, useState } from "react";

const RANGE = 10;

function ParallaxMap({ src, alt, width, height, trackRef }) {
	const fallbackRef = useRef(null);
	const [offset, setOffset] = useState({ x: 0, y: 0 });
	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		const finePointer = window.matchMedia("(pointer: fine)").matches;
		const reduceMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		const desktop = window.matchMedia("(min-width: 1024px)").matches;
		setEnabled(finePointer && !reduceMotion && desktop);
	}, []);

	useEffect(() => {
		if (!enabled) return;

		const track = trackRef?.current ?? fallbackRef.current;
		if (!track) return;

		const onMove = (event) => {
			const rect = track.getBoundingClientRect();
			const x = (event.clientX - rect.left) / rect.width - 0.5;
			const y = (event.clientY - rect.top) / rect.height - 0.5;
			setOffset({ x: x * RANGE * -1, y: y * RANGE * -1 });
		};

		const onLeave = () => {
			setOffset({ x: 0, y: 0 });
		};

		track.addEventListener("mousemove", onMove);
		track.addEventListener("mouseleave", onLeave);
		return () => {
			track.removeEventListener("mousemove", onMove);
			track.removeEventListener("mouseleave", onLeave);
		};
	}, [enabled, trackRef]);

	return (
		<div ref={fallbackRef} className="absolute inset-0 overflow-hidden">
			<img
				src={src}
				alt={alt}
				width={width}
				height={height}
				loading="lazy"
				draggable={false}
				className="absolute inset-0 h-full w-full object-cover will-change-transform"
				style={{
					transform: `scale(1.32) translate(${offset.x}px, ${offset.y}px)`,
					transition: "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
				}}
			/>
		</div>
	);
}

export default ParallaxMap;
