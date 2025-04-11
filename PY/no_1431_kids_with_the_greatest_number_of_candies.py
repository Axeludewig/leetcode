from typing import List


class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        if not candies:
            return []
        maxVal = max(candies)
        result = []
        print("max val", maxVal)
        # print(candies, extraCandies)
        for kid in candies:
            print(kid)
            sum = kid + extraCandies
            if (sum >= maxVal):
                result.append(True)
            else:
                result.append(False)

        return result
