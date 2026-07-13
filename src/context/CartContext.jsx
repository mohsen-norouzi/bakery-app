import { createContext, useCallback, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
	const [items, setItems] = useState([]);

	const addItem = useCallback((name) => {
		setItems((current) => {
			const existing = current.find((item) => item.name === name);
			if (existing) {
				return current.map((item) =>
					item.name === name
						? { ...item, quantity: item.quantity + 1 }
						: item,
				);
			}
			return [...current, { name, quantity: 1 }];
		});
	}, []);

	const removeItem = useCallback((name) => {
		setItems((current) =>
			current
				.map((item) =>
					item.name === name
						? { ...item, quantity: item.quantity - 1 }
						: item,
				)
				.filter((item) => item.quantity > 0),
		);
	}, []);

	const itemCount = useMemo(
		() => items.reduce((total, item) => total + item.quantity, 0),
		[items],
	);

	const value = useMemo(
		() => ({ items, addItem, removeItem, itemCount }),
		[items, addItem, removeItem, itemCount],
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
