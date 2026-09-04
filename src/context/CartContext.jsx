import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import { getQuote } from "../lib/pricing";

const CartContext = createContext(null);

export function CartProvider({ children }) {
	const [items, setItems] = useState([]);

	// A flavor and its vegan version are separate lines, so a box can hold both.
	const addItem = useCallback((name, vegan = false) => {
		setItems((current) => {
			const existing = current.find(
				(item) => item.name === name && item.vegan === vegan,
			);
			if (existing) {
				return current.map((item) =>
					item.name === name && item.vegan === vegan
						? { ...item, quantity: item.quantity + 1 }
						: item,
				);
			}
			return [...current, { name, vegan, quantity: 1 }];
		});
	}, []);

	const removeItem = useCallback((name, vegan = false) => {
		setItems((current) =>
			current
				.map((item) =>
					item.name === name && item.vegan === vegan
						? { ...item, quantity: item.quantity - 1 }
						: item,
				)
				.filter((item) => item.quantity > 0),
		);
	}, []);

	const getQuantity = useCallback(
		(name, vegan = false) =>
			items.find((item) => item.name === name && item.vegan === vegan)
				?.quantity ?? 0,
		[items],
	);

	const itemCount = useMemo(
		() => items.reduce((total, item) => total + item.quantity, 0),
		[items],
	);

	const quote = useMemo(() => getQuote(items), [items]);

	const value = useMemo(
		() => ({ items, addItem, removeItem, getQuantity, itemCount, quote }),
		[items, addItem, removeItem, getQuantity, itemCount, quote],
	);

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
}
