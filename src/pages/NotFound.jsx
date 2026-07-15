import Button from "../components/Button";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground";
import { ArrowRightIcon, HeartIcon } from "../components/icons";

function Spark({ className = "" }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
			className={`h-5 w-5 text-brown/45 sm:h-6 sm:w-6 ${className}`}
		>
			<path
				d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function NotFound() {
	return (
		<div className="flex min-h-screen flex-col bg-cream">
			<div className="hero-under-header relative isolate flex min-h-screen flex-1 flex-col overflow-hidden">
				<HeroBackground src="/img/404.webp" align="right" />

				<section className="relative z-10 flex flex-1 flex-col justify-center px-6 py-16 sm:px-10 lg:w-1/2 lg:px-12 xl:px-16">
					<div className="mx-auto w-full max-w-md text-center lg:mx-0 lg:max-w-sm lg:text-left">
						<div className="flex justify-center lg:justify-start">
							<HeartIcon className="h-5 w-5 text-brown" />
						</div>

						<div className="mt-3 flex items-center justify-center gap-3 lg:justify-start">
							<Spark className="-rotate-12" />
							<h1 className="font-display text-7xl leading-none text-brown sm:text-8xl lg:text-9xl">
								404
							</h1>
							<Spark className="rotate-12" />
						</div>

						<p className="mt-6 font-display text-2xl leading-snug text-brown sm:text-[1.75rem]">
							Oops! This page{" "}
							<span className="italic">crumbled away.</span>
						</p>

						<div className="mx-auto mt-6 flex max-w-xs items-center gap-3 lg:mx-0">
							<span className="h-px flex-1 bg-brown/25" />
							<HeartIcon className="h-3.5 w-3.5 shrink-0 text-brown" />
							<span className="h-px flex-1 bg-brown/25" />
						</div>

						<p className="mt-6 text-sm leading-relaxed text-brown/70 sm:text-base">
							Looks like you&apos;re lost. Let&apos;s get you back to something
							sweet.
						</p>

						<div className="mt-8 flex justify-center lg:justify-start">
							<div className="grid grid-cols-2 gap-2.5">
								<Button
									variant="outline"
									to="/"
									className="w-full whitespace-nowrap px-3 py-3 text-[11px] tracking-[0.12em] sm:px-4"
								>
									BACK TO HOME
								</Button>
								<Button
									variant="solid"
									to="/cookies"
									className="w-full whitespace-nowrap px-3 py-3 text-[11px] tracking-[0.12em] sm:px-4"
								>
									VIEW COOKIES
									<ArrowRightIcon className="h-3.5 w-3.5 shrink-0" />
								</Button>
							</div>
						</div>
					</div>
				</section>
			</div>

			<Footer />
		</div>
	);
}

export default NotFound;
