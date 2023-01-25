/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //absoluteMax
    let max = nums[0];
    //currMax
    let currMax = nums[0];

    //for nums
    //every iteration, check
    for (let i = 1; i < nums.length; i++) {
        let currValMax = currMax + nums[i];
        //Math.max currMax or nums[i], update currMax
        currMax = Math.max(currValMax, nums[i]);
        //Math.max absoluteMax, currMax, update
        max = Math.max(max, currMax);
    }
    return max;
};