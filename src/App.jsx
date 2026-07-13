import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Cookies from "./pages/Cookies";
import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<div className="bg-cream font-sans">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cookies" element={<Cookies />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
