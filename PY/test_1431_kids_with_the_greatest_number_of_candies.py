from no_1431_kids_with_the_greatest_number_of_candies import Solution


def test_example_case():
    sol = Solution()
    assert sol.kidsWithCandies([2, 3, 5, 1, 3], 3) == [
        True, True, True, False, True]


def test_all_equal():
    sol = Solution()
    assert sol.kidsWithCandies([1, 1, 1], 0) == [True, True, True]


def test_no_extra_help():
    sol = Solution()
    assert sol.kidsWithCandies([4, 2, 1, 1, 2], 1) == [
        True, False, False, False, False]


def test_with_max_extra():
    sol = Solution()
    assert sol.kidsWithCandies([12, 1, 12], 10) == [True, False, True]


def test_empty_input():
    sol = Solution()
    assert sol.kidsWithCandies([], 5) == []
