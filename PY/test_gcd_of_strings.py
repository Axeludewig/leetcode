from gcd_of_strings import Solution

solution = Solution()


def test_same_base():
    assert solution.gcdOfStrings("ABCABC", "ABC") == "ABC"


def test_repeated_pattern():
    assert solution.gcdOfStrings("ABABABAB", "ABAB") == "ABAB"


def test_no_common_divisor():
    assert solution.gcdOfStrings("LEET", "CODE") == ""


def test_full_match():
    assert solution.gcdOfStrings("XYZ", "XYZ") == "XYZ"


def test_one_empty():
    assert solution.gcdOfStrings("ABC", "") == ""
    assert solution.gcdOfStrings("", "ABC") == ""


def test_both_empty():
    assert solution.gcdOfStrings("", "") == ""


def test_multiple_repeats():
    assert solution.gcdOfStrings("AAAAAA", "AA") == "AA"
