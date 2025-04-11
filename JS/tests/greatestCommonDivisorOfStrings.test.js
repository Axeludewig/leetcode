const gcdOfStrings = require("../1071_greatestCommonDivisorOfStrings");

describe("gcdOfStrings", () => {
	test("should return the correct common divisor for equal base", () => {
		expect(gcdOfStrings("ABCABC", "ABC")).toBe("ABC");
	});

	test("should return the correct common divisor when base is repeated", () => {
		expect(gcdOfStrings("ABABAB", "ABAB")).toBe("AB");
	});

	test("should return empty string when no common base", () => {
		expect(gcdOfStrings("LEET", "CODE")).toBe("");
	});

	test("should return full string if both strings are equal", () => {
		expect(gcdOfStrings("XYZ", "XYZ")).toBe("XYZ");
	});

	test("should handle when one string is multiple of the other", () => {
		expect(gcdOfStrings("AAAAAA", "AAA")).toBe("AAA");
		expect(gcdOfStrings("ABABABAB", "ABAB")).toBe("ABAB");
	});

	test("should return empty string if no valid repetition exists", () => {
		expect(gcdOfStrings("ABCDEF", "ABC")).toBe("");
	});

	test("should handle edge case with empty strings", () => {
		expect(gcdOfStrings("", "")).toBe("");
	});
});
