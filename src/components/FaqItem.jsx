import { useId, useState } from "react";
import { PlusIcon } from "./icons";

function FaqItem({ question, answer }) {
	const [isOpen, setIsOpen] = useState(false);
	const panelId = useId();

	return (
		<div className="border-b border-brown/10 py-5 last:border-0">
			<button
				type="button"
				onClick={() => setIsOpen((open) => !open)}
				aria-expanded={isOpen}
				aria-controls={panelId}
				className="flex w-full items-center justify-between gap-4 text-left font-display text-lg text-brown"
			>
				{question}
				<span
					className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brown/30 text-brown transition-transform duration-300 ease-in-out ${
						isOpen ? "rotate-45" : ""
					}`}
				>
					<PlusIcon className="h-3.5 w-3.5" />
				</span>
			</button>

			<div
				id={panelId}
				className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
					isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
				}`}
			>
				<div className="overflow-hidden">
					<p className="pt-3 text-sm text-brown/70">{answer}</p>
				</div>
			</div>
		</div>
	);
}

export default FaqItem;
