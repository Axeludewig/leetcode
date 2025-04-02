// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single
// array sorted in non-decreasing order.

// The final sorted array should not be returned by the function,
// but instead be stored inside the array nums1. To accommodate this,
// nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	nums1.splice(m, n); // Remove the trailing zeros from nums1
	nums1.push(...nums2); // Add nums2 to nums1
	nums1.sort((a, b) => a - b); // Sort nums1 in non-decreasing order

	console.log(nums1);
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// This is a more efficient solution that merges in place without using extra space
// Time complexity: O(m + n)
// Space complexity: O(1)
// This approach uses two pointers to compare elements from the end of both arrays
// and places the larger element at the end of nums1. This avoids the need for sorting
// after merging, which is more efficient than the previous approach.
// The idea is to start from the end of both arrays and fill nums1 from the back.
// This way, we don't need to worry about overwriting elements in nums1 that we haven't
// processed yet.
var mergePrimitive = function (nums1, m, nums2, n) {
	// nums1 has enough space to hold all elements from nums2
	// we use -1 because of 0-based indexing
	// in order to start from the end of the array
	let p1 = m - 1;
	let p2 = n - 1;
	let p = m + n - 1;

	console.log("Pointer 1:", p1);
	console.log("Pointer 2:", p2);
	console.log("Pointer:", p);
	// Compare elements from the back and place them in correct position
	while (p1 >= 0 && p2 >= 0) {
		if (nums1[p1] > nums2[p2]) {
			nums1[p] = nums1[p1];
			p1--;
		} else {
			nums1[p] = nums2[p2];
			p2--;
		}
		p--;
	}

	// If nums2 still has elements left, copy them
	while (p2 >= 0) {
		nums1[p] = nums2[p2];
		p2--;
		p--;
	}

	console.log(nums1);
	// No need to copy remaining nums1 elements, they're already in place
};

console.log("test");
var nums1 = [1, 2, 3, 0, 0, 0];
var m = 3;
var nums2 = [2, 5, 6];
var n = 3;
merge(nums1, m, nums2, n); // Output: [1,2,2,3,5,6]
mergePrimitive(nums1, m, nums2, n); // Output: [1,2,2,3,5,6]
// ````Explanation: The arrays we merge are [1,2,3] and [2,5,6].
// The result is [1,2,2,3,5,6] and there are no elements left behind.
// Constraints:
// - nums1.length == m + n
// - nums2.length == n

module.exports = {
	merge,
	mergePrimitive,
};
