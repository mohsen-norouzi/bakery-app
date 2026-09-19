import assert from "node:assert/strict";
import test from "node:test";
import { HALLOWEEN_COOKIES, hasVeganOption } from "./cookies.js";
import {
	getFlavorPrice,
	getNextPack,
	getPackPrice,
	getPackSave,
	getQuote,
	PRICE_PACKS,
} from "./pricing.js";
import { buildWhatsAppOrderUrl } from "./whatsapp.js";

test("the table and cart agree on every updated cookie box price", () => {
	const expected = [
		[1, 3.8, 3.8],
		[2, 7.6, 7.1],
		[4, 15.2, 13.7],
		[6, 22.8, 19.3],
		[8, 30.4, 25.9],
		[10, 38, 33],
	];
	assert.deepEqual(
		PRICE_PACKS.map(({ quantity, was, price }) => [quantity, was, price]),
		expected,
	);
	for (const [quantity, was, total] of expected) {
		const quote = getQuote([{ name: "Chocolate Chip", quantity }]);
		assert.equal(quote.was, was);
		assert.equal(quote.total, total);
		assert.equal(quote.saved, Math.round((was - total) * 100) / 100);
		assert.equal(getPackPrice(quantity), total);
	}
});

test("odd quantities and larger boxes get the best combination of packs", () => {
	for (const [quantity, total] of [
		[3, 10.9],
		[5, 17.5],
		[12, 38.6],
		[16, 51.8],
	]) {
		const quote = getQuote([{ name: "The Little Ghosts", quantity }]);
		assert.equal(quote.total, total);
		assert.equal(quote.was, Math.round(quantity * 380) / 100);
		assert.equal(quote.saved, Math.round(quantity * 380 - total * 100) / 100);
	}
});

test("mixed classic, vegan and Halloween cookies share a box discount", () => {
	const quote = getQuote([
		{ name: "Chocolate Chip", quantity: 1, vegan: true },
		{ name: "The Midnight Mummy", quantity: 1 },
		{ name: "Cardamom & Pistachio", quantity: 2 },
		{ name: "Fudgy Brownie", quantity: 2 },
	]);
	assert.deepEqual(quote, {
		count: 6,
		cookieCount: 4,
		brownieCount: 2,
		packPrice: 13.7,
		surcharge: 1.4,
		total: 22.1,
		was: 23.6,
		saved: 1.5,
	});
});

test("brownies keep their own price and do not trigger cookie discounts", () => {
	assert.equal(getFlavorPrice("Fudgy Brownie"), 3.5);
	const brownies = getQuote([{ name: "Fudgy Brownie", quantity: 4 }]);
	assert.equal(brownies.total, 14);
	assert.equal(brownies.was, 14);
	assert.equal(brownies.saved, 0);
	assert.equal(brownies.cookieCount, 0);
	const mixed = getQuote([
		{ name: "Fudgy Brownie", quantity: 1 },
		{ name: "The Mummy", quantity: 1 },
	]);
	assert.equal(mixed.total, 7.3);
	assert.equal(mixed.saved, 0);
});

test("empty baskets and single cookies have no discounted original price", () => {
	const empty = getQuote();
	assert.equal(empty.count, 0);
	assert.equal(empty.total, 0);
	assert.equal(empty.was, 0);
	assert.equal(empty.saved, 0);
	const single = getQuote([{ name: "Cardamom & Pistachio", quantity: 1 }]);
	assert.equal(single.total, 4.5);
	assert.equal(single.was, 4.5);
	assert.equal(single.saved, 0);
});

test("the next box suggestion uses the same savings as the price table", () => {
	assert.equal(getNextPack(1).quantity, 2);
	assert.equal(getPackSave(getNextPack(1)), 0.5);
	assert.equal(getNextPack(5).price, 19.3);
	assert.equal(getPackSave(getNextPack(5)), 3.5);
	assert.equal(getNextPack(10), null);
});

test("the WhatsApp order includes the original and discounted totals", () => {
	const url = new URL(
		buildWhatsAppOrderUrl([
			{ name: "The Little Ghosts", quantity: 2 },
			{ name: "Fudgy Brownie", quantity: 1 },
		]),
	);
	assert.match(
		url.searchParams.get("text"),
		/2 cookies · 1 brownie — €10.60 \(was €11.10\)/,
	);
	const singleUrl = new URL(
		buildWhatsAppOrderUrl([{ name: "Chocolate Chip", quantity: 1 }]),
	);
	assert.doesNotMatch(singleUrl.searchParams.get("text"), /was/);
});

test("only the requested flavours change to €3.80, including vegan versions", () => {
	const reduced = [
		"Sea Salt Chocolate Chip",
		"Chocolate Chip",
		"Triple Chocolate",
		...HALLOWEEN_COOKIES.map(({ name }) => name),
	];
	for (const name of reduced) {
		assert.equal(getFlavorPrice(name), 3.8, name);
		assert.equal(getQuote([{ name, quantity: 1 }]).total, 3.8, name);
		if (hasVeganOption(name)) {
			assert.equal(
				getQuote([{ name, quantity: 1, vegan: true }]).total,
				3.8,
				name,
			);
		}
	}
	for (const [name, price] of [
		["Hazelnut + Chocolate", 4],
		["Raisin Cookie", 4],
		["Cardamom & Pistachio", 4.5],
		["Fudgy Brownie", 3.5],
	]) {
		assert.equal(getFlavorPrice(name), price, name);
		assert.equal(getQuote([{ name, quantity: 1 }]).total, price, name);
	}
	assert.equal(
		getQuote([{ name: "Hazelnut + Chocolate", quantity: 2 }]).total,
		7.5,
	);
	assert.equal(getQuote([{ name: "Raisin Cookie", quantity: 2 }]).total, 7.5);
	assert.equal(
		getQuote([{ name: "Cardamom & Pistachio", quantity: 2 }]).total,
		8.5,
	);
});
