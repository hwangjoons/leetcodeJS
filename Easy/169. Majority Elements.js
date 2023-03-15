var majorityElement = function(nums) {
  let majority = nums.length / 2
  let map = {};
  for (let i = 0; i < nums.length; i++) {
      map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1
      if (map[nums[i]] > majority) return nums[i]
  }
};