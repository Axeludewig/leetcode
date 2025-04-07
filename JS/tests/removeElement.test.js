const {
	removeElement,
	removeElementOptimal,
} = require("../27_removeElement.js");

describe("removeElement", () => {
	test("removes all occurrences of val from the array", () => {
		const nums = [3, 2, 2, 3];
		const val = 3;
		const length = removeElement([...nums], val); // clone to avoid mutation
		expect(length).toBe(2);
	});

	test("removes elements from array with multiple occurrences", () => {
		const nums = [0, 1, 2, 2, 3, 0, 4, 2];
		const val = 2;
		const length = removeElement([...nums], val);
		expect(length).toBe(5);
	});

	test("returns full length when no elements are removed", () => {
		const nums = [1, 2, 3];
		const val = 4;
		const length = removeElement([...nums], val);
		expect(length).toBe(3);
	});

	test("returns zero when all elements are removed", () => {
		const nums = [1, 1, 1, 1];
		const val = 1;
		const length = removeElement([...nums], val);
		expect(length).toBe(0);
	});

	test("handles empty array", () => {
		const nums = [];
		const val = 0;
		const length = removeElement([...nums], val);
		expect(length).toBe(0);
	});
});

describe("removeElementOptimal", () => {
	test("removes all occurrences of val from the array", () => {
		const nums = [3, 2, 2, 3];
		const val = 3;
		const length = removeElementOptimal(nums, val);
		const remaining = nums.slice(0, length);
		expect(length).toBe(2);
		expect(remaining).toEqual(expect.arrayContaining([2, 2]));
	});

	test("works with scattered values", () => {
		const nums = [0, 1, 2, 2, 3, 0, 4, 2];
		const val = 2;
		const length = removeElementOptimal(nums, val);
		const remaining = nums.slice(0, length);
		expect(length).toBe(5);
		expect(remaining).toEqual(expect.arrayContaining([0, 1, 3, 0, 4]));
	});

	test("does nothing when val is not present", () => {
		const nums = [1, 2, 3];
		const val = 4;
		const length = removeElementOptimal(nums, val);
		const remaining = nums.slice(0, length);
		expect(length).toBe(3);
		expect(remaining).toEqual(expect.arrayContaining([1, 2, 3]));
	});

	test("clears the array when all values match", () => {
		const nums = [1, 1, 1, 1];
		const val = 1;
		const length = removeElementOptimal(nums, val);
		const remaining = nums.slice(0, length);
		expect(length).toBe(0);
		expect(remaining).toEqual([]);
	});

	test("handles empty array", () => {
		const nums = [];
		const val = 1;
		const length = removeElementOptimal(nums, val);
		expect(length).toBe(0);
		expect(nums.slice(0, length)).toEqual([]);
	});
});
