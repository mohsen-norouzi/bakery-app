import { HeartIcon } from "../icons";

function WallIntro() {
	return (
		<div className="text-center">
			<p className="flex items-center justify-center gap-2 text-xs font-medium tracking-[0.25em] text-brown/70">
				KIND WORDS
				<HeartIcon className="size-3.5" />
			</p>

			<h1 className="mt-6 font-display text-4xl leading-[1.1] text-brown sm:text-5xl lg:text-6xl">
				Loved by Cookie
				<span className="block text-tan italic">Lovers Like You.</span>
			</h1>

			<p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-brown/70">
				Every cookie we bake carries a little piece of our heart — and your
				words make it all so worth it.
			</p>
		</div>
	);
}

export default WallIntro;
