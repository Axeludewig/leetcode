const mergeAlternately = require("../1748_mergeStringsAlternately");

describe("mergeAlternately", () => {
	test("should merge strings of the same length", () => {
		expect(mergeAlternately("abc", "def")).toBe("adbecf");
	});

	test("should merge when first string is longer", () => {
		expect(mergeAlternately("abcde", "1234")).toBe("a1b2c3d4e");
	});

	test("should merge when second string is longer", () => {
		expect(mergeAlternately("abc", "123")).toBe("a1b2c3");
	});

	test("should handle one empty string", () => {
		expect(mergeAlternately("abc", "")).toBe("abc");
		expect(mergeAlternately("", "123")).toBe("123");
	});

	test("should handle both empty strings", () => {
		expect(mergeAlternately("", "")).toBe("");
	});
});
