import assert from "node:assert/strict";
import test from "node:test";
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
		[1, 4, 4],
		[2, 8, 7.5],
		[4, 16, 14.5],
		[6, 24, 20.5],
		[8, 32, 27.5],
		[10, 40, 35],
	];
	assert.deepEqual(
		PRICE_PACKS.map(({ quantity, was, price }) => [quantity, was, price]),
		expected,
	);
	for (const [quantity, was, total] of expected) {
		const quote = getQuote([{ name: "Chocolate Chip", quantity }]);
		assert.equal(quote.was, was);
		assert.equal(quote.total, total);
		assert.equal(quote.saved, was - total);
		assert.equal(getPackPrice(quantity), total);
	}
});

test("odd quantities and larger boxes get the best combination of packs", () => {
	for (const [quantity, total] of [
		[3, 11.5],
		[5, 18.5],
		[12, 41],
		[16, 55],
	]) {
		const quote = getQuote([{ name: "The Little Ghosts", quantity }]);
		assert.equal(quote.total, total);
		assert.equal(quote.was, quantity * 4);
		assert.equal(quote.saved, quantity * 4 - total);
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
		packPrice: 14.5,
		surcharge: 1,
		total: 22.5,
		was: 24,
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
	assert.equal(mixed.total, 7.5);
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
	assert.equal(getNextPack(5).price, 20.5);
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
		/2 cookies · 1 brownie — €11 \(was €11.50\)/,
	);
	const singleUrl = new URL(
		buildWhatsAppOrderUrl([{ name: "Chocolate Chip", quantity: 1 }]),
	);
	assert.doesNotMatch(singleUrl.searchParams.get("text"), /was/);
});
