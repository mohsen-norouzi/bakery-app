import Footer from "./Footer";
import Header from "./Header";
import Reveal from "./Reveal";

function LegalPage({ title, updated, children }) {
	return (
		<div className="min-h-screen bg-cream">
			<Header />
			<main className="mx-auto max-w-3xl px-6 py-12 sm:py-16 lg:px-10 lg:py-20">
				<Reveal>
					<p className="text-xs font-medium tracking-[0.2em] text-brown/60">
						LEGAL
					</p>
					<h1 className="mt-4 font-display text-4xl text-brown sm:text-5xl">
						{title}
					</h1>
					{updated && (
						<p className="mt-3 text-sm text-brown/50">Last updated: {updated}</p>
					)}
					<div className="mt-10 space-y-8 text-brown/75 [&_a]:text-brown [&_a]:underline [&_a]:underline-offset-2 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-brown [&_li]:mt-2 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5">
						{children}
					</div>
				</Reveal>
			</main>
			<Reveal>
				<Footer />
			</Reveal>
		</div>
	);
}

export default LegalPage;
