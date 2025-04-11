const {
	canPlaceFlowers,
	canPlaceFlowersNaive,
} = require("../605_canPlaceFlowers");

describe("canPlaceFlowers", () => {
	const testCases = [
		{ input: [[1, 0, 0, 0, 1], 1], expected: true },
		{ input: [[1, 0, 0, 0, 1], 2], expected: false },
		{ input: [[0], 1], expected: true },
		{ input: [[1], 0], expected: true },
		{ input: [[1], 1], expected: false },
		{ input: [[0, 0, 1], 1], expected: true },
		{ input: [[0, 1, 0], 1], expected: false },
		{ input: [[0, 0, 0], 2], expected: true },
		{ input: [[0, 0, 0], 3], expected: false },
		{ input: [[1, 0, 0, 0, 0, 1], 1], expected: true },
		{ input: [[1, 0, 0, 0, 0, 1], 2], expected: false },
		{ input: [[0, 0, 0, 0, 0], 2], expected: true },
		{ input: [[0, 0, 0, 0, 0], 3], expected: true },
		{ input: [[0, 0, 1, 0, 0], 2], expected: true },
	];

	testCases.forEach(({ input, expected }, index) => {
		const [flowerbed, n] = input;

		test(`canPlaceFlowers test #${index + 1}`, () => {
			expect(canPlaceFlowers([...flowerbed], n)).toBe(expected);
		});

		test(`canPlaceFlowersNaive test #${index + 1}`, () => {
			expect(canPlaceFlowersNaive([...flowerbed], n)).toBe(expected);
		});
	});
});
