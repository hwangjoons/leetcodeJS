/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  let currentMin = prices[0];

  for (let i = 1; i < prices.length; i++) {
      let currentProfit = prices[i] - currentMin;
      if (currentProfit > maxProfit) {
          maxProfit = currentProfit;
      }
      if (currentMin > prices[i]) {
          currentMin = prices[i];
      }
  }
  return maxProfit;
};