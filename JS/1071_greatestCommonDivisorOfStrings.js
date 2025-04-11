// For two strings s and t, we say "t divides s"
// if and only if s = t + t + t + ... + t + t
// (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2,
// return the largest string x such that x divides both str1 and str2.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
	// Check if str1 + str2 is equal to str2 + str1
	// If not, return an empty string
	// This condition checks if the two strings can be formed
	// by repeating a common substring
	if (str1 + str2 !== str2 + str1) return "";

	// The function gcd is used to find the greatest common divisor
	// of the lengths of the two strings
	// This is done to find the length of the largest common substring
	// that divides both strings
	// The function uses the Euclidean algorithm to find the GCD
	// The Euclidean algorithm is a method for computing the greatest
	// common divisor (GCD) of two integers
	// It is based on the principle that the GCD of two numbers
	// is the same as the GCD of the smaller number and the remainder
	// of the larger number divided by the smaller number
	// The function takes two integers a and b as input
	// and returns the GCD of a and b
	// The function uses recursion to compute the GCD
	// If b is 0, return a
	// Otherwise, call the function again with b and the remainder
	// of a divided by b
	// This process continues until b becomes 0
	// The GCD of the two numbers is returned
	// The GCD of the lengths of the two strings is used to find
	// the length of the largest common substring that divides both strings
	function gcd(a, b) {
		return b === 0 ? a : gcd(b, a % b);
	}

	const len = gcd(str1.length, str2.length);

	// The substring of str1 from index 0 to len
	// is the largest common substring that divides both strings
	return str1.slice(0, len);
};

module.exports = gcdOfStrings;
