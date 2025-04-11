const {
	kidsWithCandies,
	kidsWithCandiesNaive,
} = require("../1431_kidsWithTheGreatestNumberOfCandies");

describe("kidsWithCandies", () => {
	const testCases = [
		{
			input: {
				candies: [2, 3, 5, 1, 3],
				extraCandies: 3,
			},
			expected: [true, true, true, false, true],
		},
		{
			input: {
				candies: [4, 2, 1, 1, 2],
				extraCandies: 1,
			},
			expected: [true, false, false, false, false],
		},
		{
			input: {
				candies: [12, 1, 12],
				extraCandies: 10,
			},
			expected: [true, false, true],
		},
		{
			input: {
				candies: [1, 1, 1],
				extraCandies: 0,
			},
			expected: [true, true, true],
		},
		{
			input: {
				candies: [],
				extraCandies: 5,
			},
			expected: [],
		},
	];

	testCases.forEach(({ input, expected }, index) => {
		test(`Test case ${index + 1}`, () => {
			expect(kidsWithCandies(input.candies, input.extraCandies)).toEqual(
				expected
			);
			expect(
				kidsWithCandiesNaive(input.candies, input.extraCandies)
			).toEqual(expected);
		});
	});
});
