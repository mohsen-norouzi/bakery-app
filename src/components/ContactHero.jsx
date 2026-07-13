import ImagePlaceholder from "./ImagePlaceholder";
import { HeartIcon } from "./icons";

const CONTACT_DETAILS = [
	{
		label: "Email Us",
		lines: ["hello@bavobakes.com"],
	},
	{
		label: "Call Us",
		lines: ["+1 (555) 123-4567", "Mon – Fri, 9am – 6pm"],
	},
	{
		label: "Our Kitchen",
		lines: ["123 Sweet Lane", "Bakeville, CA 90210"],
	},
	{
		label: "Response Time",
		lines: ["We usually reply", "within 24 hours."],
	},
];

function ContactHero() {
	return (
		<section className="relative isolate overflow-hidden">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
				<div className="max-w-xl">
					<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
						<span>CONTACT US</span>
						<HeartIcon className="h-3.5 w-3.5 text-brown" />
					</div>

					<h1 className="mt-6 flex items-start gap-3 font-display text-5xl leading-[1.15] text-brown sm:text-6xl">
						<span>
							We&apos;d love to
							<br />
							<span className="italic">hear from you.</span>
						</span>
						<HeartIcon className="mt-2 hidden h-8 w-8 shrink-0 text-brown/30 sm:block" />
					</h1>

					<div className="mt-6 h-px w-16 bg-brown/30" />

					<p className="mt-6 max-w-md text-brown/70">
						Have a question, special request, or just want to say hello?
						We&apos;re here for you.
					</p>
					<p className="mt-4 max-w-md text-brown/70">
						Reach out to us and we&apos;ll get back to you as soon as
						possible.
					</p>

					<div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:flex sm:flex-wrap sm:gap-x-10">
						{CONTACT_DETAILS.map((detail) => (
							<div key={detail.label}>
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand">
									<ImagePlaceholder
										width={20}
										height={20}
										label="20×20"
										className="h-5 w-5"
									/>
								</div>

								<p className="mt-3 text-xs font-medium tracking-[0.15em] text-brown">
									{detail.label.toUpperCase()}
								</p>
								{detail.lines.map((line) => (
									<p key={line} className="text-sm text-brown/60">
										{line}
									</p>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactHero;
