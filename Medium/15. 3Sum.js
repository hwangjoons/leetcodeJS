/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    nums.sort((a,b) => { return a - b});
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        let curr = nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            if (curr + nums[left] + nums[right] == 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) {
                    left++;
                }
                while (nums[right] === nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            } else if (curr + nums[left] + nums[right] > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return result;
};