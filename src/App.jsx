import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
	return (
		<div className="relative isolate min-h-screen bg-cream font-sans">
			<img
				src="/img/hero-1.png"
				alt=""
				aria-hidden="true"
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<Header />
			<Hero />
		</div>
	);
}

export default App;
