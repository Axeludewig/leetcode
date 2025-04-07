const {
	removeDuplicates,
	removeDuplicatesOptimal,
} = require("../26_removeDuplicates");

const testCases = [
	{
		input: [1, 1, 2],
		expectedK: 2,
		expectedArrayStart: [1, 2],
	},
	{
		input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
		expectedK: 5,
		expectedArrayStart: [0, 1, 2, 3, 4],
	},
	{
		input: [],
		expectedK: 0,
		expectedArrayStart: [],
	},
	{
		input: [1],
		expectedK: 1,
		expectedArrayStart: [1],
	},
	{
		input: [1, 1, 1, 1],
		expectedK: 1,
		expectedArrayStart: [1],
	},
	{
		input: [-1, 0, 0, 0, 0, 3, 3],
		expectedK: 3,
		expectedArrayStart: [-1, 0, 3],
	},
];

describe("removeDuplicates", () => {
	test.each(testCases)(
		"removeDuplicates: %#",
		({ input, expectedK, expectedArrayStart }) => {
			const nums = [...input]; // copy to avoid modifying test data
			const k = removeDuplicates(nums);
			expect(k).toBe(expectedK);
			expect(nums.slice(0, k)).toEqual(expectedArrayStart);
		}
	);
});

describe("removeDuplicatesOptimal", () => {
	test.each(testCases)(
		"removeDuplicatesOptimal: %#",
		({ input, expectedK, expectedArrayStart }) => {
			const nums = [...input];
			const k = removeDuplicatesOptimal(nums);
			expect(k).toBe(expectedK);
			expect(nums.slice(0, k)).toEqual(expectedArrayStart);
		}
	);
});
