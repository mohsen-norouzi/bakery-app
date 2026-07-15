import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FloatingOrderButton from "./components/FloatingOrderButton";
import PageEnter from "./components/PageEnter";
import PageMeta from "./components/PageMeta";
import { CartProvider } from "./context/CartContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cookies from "./pages/Cookies";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
	return (
		<BrowserRouter>
			<PageMeta />
			<CartProvider>
				<div className="bg-cream font-sans">
					<PageEnter>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/cookies" element={<Cookies />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/privacy" element={<Privacy />} />
							<Route path="/terms" element={<Terms />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</PageEnter>
					<FloatingOrderButton />
				</div>
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
