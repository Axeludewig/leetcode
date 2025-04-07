// Given an integer array nums and an integer val,
// remove all occurrences of val in nums in-place.
// The order of the elements may be changed. Then return the number
// of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal
// to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of
// nums contain the elements which are not equal to val.
// The remaining elements of nums are not important as
// well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

var removeElement = function (nums, val) {
	console.log(nums.length);

	for (var i = 0; i <= nums.length; i++) {
		if (nums[i] === val) {
			nums.splice(i, 1);
			i--; // Decrement i to account for the removed element
		}
	}

	console.log(nums);
	return nums.length;
};
var removeElementOptimal = function (nums, val) {
	// This is a more efficient solution that uses two pointers
	// Time complexity: O(n)
	// Space complexity: O(1)
	let i = 0;

	// Iterate through the array
	for (let j = 0; j < nums.length; j++) {
		// If the current element is not equal to val,
		// place it at the i-th position and increment i
		// This effectively moves all elements not equal to val
		// to the front of the array
		// and keeps track of the new length of the array
		if (nums[j] !== val) {
			nums[i] = nums[j];
			i++;
		}
	}
	console.log(nums);

	return i;
};

module.exports = {
	removeElement,
	removeElementOptimal,
};

nums = [0, 1, 2, 2, 3, 0, 4, 2];
val = 2;
console.log(removeElement(nums, val));
console.log(removeElementOptimal(nums, val));
