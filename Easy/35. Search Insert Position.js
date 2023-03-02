var searchInsert = function(nums, target) {
  let left = 0;
  let right = 1;
  for (let i = left; i < nums.length; i++) {
      if (target < nums[i]) {
          return left;
      } else if (target > nums[i] && target > nums[right]) {
          right++;
      } else if (target < nums[right] && target > nums[i]) {
          return right;
      } else if (target === nums[right]) {
          return right;
      } else if (target === nums[left]) {
          return left;
      } else {
          return nums.length;
      }
  }
};