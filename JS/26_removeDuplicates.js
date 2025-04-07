// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	let pointer = 0;

	for (var i = 1; i <= nums.length; i++) {
		console.log(
			"comparing... " + nums[i],
			nums[pointer] + " at indexes " + i + pointer + "\n"
		);
		if (nums[i] == nums[pointer]) {
			console.log();
			console.log("removing " + nums[i] + " at index " + i + "\n");
			nums.splice(i, 1);

			console.log("new array is " + nums + "\n");
			i--;
		} else {
			pointer++;
			console.log(
				"not equal, new indexes are " + (i + 1) + pointer + "\n"
			);
		}
	}

	console.log(nums);
	return nums.length;
};

// This is a more efficient solution that uses two pointers
// Time complexity: O(n)
// Space complexity: O(1)
// This approach uses two pointers to keep track of the position
// of the last unique element and the current element being processed.
// The idea is to iterate through the array and whenever we find a new
// unique element, we place it at the position of the last unique element
// and increment the position of the last unique element.
// This way, we effectively remove duplicates in-place without using
// any extra space.
// The first pointer (k) keeps track of the position to insert the next unique element.
// The second pointer (i) iterates through the array.
// Whenever we find a new unique element, we place it at the position of k
// and increment k.
// Finally, we return k as the number of unique elements.
var removeDuplicatesOptimal = function (nums) {
	if (nums.length === 0) return 0;

	let k = 1; // The position to insert the next unique element

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== nums[k - 1]) {
			nums[k] = nums[i];
			k++;
		}
	}

	return k;
};

nums = [-1, 0, 0, 0, 0, 3, 3];

console.log(removeDuplicates(nums)); // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
console.log(removeDuplicatesOptimal(nums)); // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
