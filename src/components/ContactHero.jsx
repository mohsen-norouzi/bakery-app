import HeroCurve from "./HeroCurve";
import {
	ClockIcon,
	HeartIcon,
	MailIcon,
	MapPinIcon,
	PhoneIcon,
} from "./icons";

const CONTACT_DETAILS = [
	{
		label: "Email Us",
		lines: ["hello@bavobakes.com"],
		href: "mailto:hello@bavobakes.com",
		icon: MailIcon,
	},
	{
		label: "Call Us",
		lines: ["+34 666 61 10 91"],
		href: "tel:+34666611091",
		icon: PhoneIcon,
	},
	{
		label: "Our Kitchen",
		lines: ["Les Corts, Barcelona"],
		icon: MapPinIcon,
	},
	{
		label: "Response Time",
		lines: ["Usually within 24 hours"],
		icon: ClockIcon,
	},
];

function ContactHero() {
	return (
		<section className="relative flex min-h-0 flex-1 flex-col">
			<div className="mx-auto flex w-full max-w-7xl min-h-0 flex-1 flex-col justify-center px-6 pb-20 pt-6 sm:px-6 sm:pb-24 sm:pt-8 lg:px-10">
				<div className="max-w-xl">
					<div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brown/70">
						<span>CONTACT US</span>
						<HeartIcon className="h-3.5 w-3.5 text-brown" />
					</div>

					<h1 className="mt-5 flex items-start gap-3 font-display text-4xl leading-[1.15] text-brown sm:mt-6 sm:text-5xl lg:text-6xl">
						<span>
							We&apos;d love to
							<br />
							<span className="italic">hear from you.</span>
						</span>
						<HeartIcon className="mt-2 hidden h-8 w-8 shrink-0 text-brown/30 sm:block" />
					</h1>

					<div className="mt-5 h-px w-16 bg-brown/30 sm:mt-6" />

					<p className="mt-5 max-w-md text-brown/70 sm:mt-6">
						Have a question, special request, or just want to say hello?
						We&apos;re here for you — reach out and we&apos;ll get back soon.
					</p>

					<div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:mt-10 sm:gap-x-10 sm:gap-y-8">
						{CONTACT_DETAILS.map((detail) => {
							const body = (
								<>
									<div className="flex h-11 w-11 items-center justify-center rounded-full bg-sand/80 sm:h-12 sm:w-12">
										<detail.icon className="h-5 w-5 text-brown" />
									</div>
									<p className="mt-2.5 text-xs font-medium tracking-[0.15em] text-brown">
										{detail.label.toUpperCase()}
									</p>
									{detail.lines.map((line) => (
										<p key={line} className="text-sm text-brown/60">
											{line}
										</p>
									))}
								</>
							);

							return detail.href ? (
								<a
									key={detail.label}
									href={detail.href}
									className="transition-opacity hover:opacity-80"
								>
									{body}
								</a>
							) : (
								<div key={detail.label}>{body}</div>
							);
						})}
					</div>
				</div>
			</div>

			<HeroCurve />
		</section>
	);
}

export default ContactHero;
