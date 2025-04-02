const { merge, mergePrimitive } = require("../88_mergeSortedArray");

test("merges [1,2,3] and [2,5,6]", () => {
	const nums1 = [1, 2, 3, 0, 0, 0];
	const nums2 = [2, 5, 6];
	merge(nums1, 3, nums2, 3);
	expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
});

test("merges empty nums2", () => {
	const nums1 = [1];
	const nums2 = [];
	merge(nums1, 1, nums2, 0);
	expect(nums1).toEqual([1]);
});

test("merges empty nums1", () => {
	const nums1 = [0];
	const nums2 = [1];
	merge(nums1, 0, nums2, 1);
	expect(nums1).toEqual([1]);
});

// Tests using mergePrimitive
test("merges [1,2,3] and [2,5,6]", () => {
	const nums1 = [1, 2, 3, 0, 0, 0];
	const nums2 = [2, 5, 6];
	mergePrimitive(nums1, 3, nums2, 3);
	expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
});

test("merges empty nums2", () => {
	const nums1 = [1];
	const nums2 = [];
	mergePrimitive(nums1, 1, nums2, 0);
	expect(nums1).toEqual([1]);
});

test("merges empty nums1", () => {
	const nums1 = [0];
	const nums2 = [1];
	mergePrimitive(nums1, 0, nums2, 1);
	expect(nums1).toEqual([1]);
});
