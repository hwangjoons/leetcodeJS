/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
      if (map[nums[i]] === undefined) {
          map[nums[i]] = 1;
      } else if (map[nums[i]] > 0) {
          console.log(map[nums[i]], nums[i])
          return true;
      }
  }

  return false;
};