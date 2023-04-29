class Solution(object):
    def twoSum(self, nums, target):
        obj = {}
        i = 0
        while i < len(nums):
            diff = target - nums[i]
            if diff in obj:
                return [obj[diff], i]
            else:
                obj[nums[i]] = i
            i += 1