class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        maxProfit = 0
        currentMin = prices[0]
        for price in prices:
            profit = price - currentMin
            maxProfit = max(maxProfit, profit)
            currentMin = min(currentMin, price)

        return maxProfit