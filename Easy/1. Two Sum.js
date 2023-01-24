/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
      let currentDiff = target - nums[i];
      if (obj[currentDiff] !== undefined) {
          return [obj[currentDiff], i]
      } else {
          obj[nums[i]] = i;
      }
  }
};