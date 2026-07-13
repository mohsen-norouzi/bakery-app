import { useEffect, useRef, useState } from "react";
import { CaretDownIcon, CheckIcon } from "./icons";

function SortDropdown({ options, value, onChange }) {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div ref={containerRef} className="relative">
			<button
				type="button"
				onClick={() => setIsOpen((open) => !open)}
				aria-haspopup="listbox"
				aria-expanded={isOpen}
				className="flex items-center gap-2 rounded-full border border-brown/20 bg-cream px-4 py-2 text-sm text-brown transition-colors hover:bg-brown/5"
			>
				{value}
				<CaretDownIcon
					className={`h-3.5 w-3.5 text-brown/60 transition-transform ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
			</button>

			{isOpen && (
				<ul
					role="listbox"
					className="absolute top-full right-0 z-10 mt-2 w-56 overflow-hidden rounded-2xl border border-brown/15 bg-cream py-1 shadow-lg"
				>
					{options.map((option) => {
						const isSelected = option === value;

						return (
							<li key={option}>
								<button
									type="button"
									role="option"
									aria-selected={isSelected}
									onClick={() => {
										onChange(option);
										setIsOpen(false);
									}}
									className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors hover:bg-brown/5 ${
										isSelected
											? "font-medium text-brown"
											: "text-brown/70"
									}`}
								>
									<CheckIcon
										className={`h-3.5 w-3.5 shrink-0 ${
											isSelected ? "opacity-100" : "opacity-0"
										}`}
									/>
									{option}
								</button>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}

export default SortDropdown;
