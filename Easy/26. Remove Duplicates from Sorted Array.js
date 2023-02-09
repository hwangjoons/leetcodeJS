var removeDuplicates = function(nums) {

  for (let i = 0; i < nums.length; i++) {
    let count = i + 1;
    while (count < nums.length) {
      if (nums[i] === nums[count]) {
        nums.splce(count, 1);
        count--;
      }
      count++;
    }
  }
}