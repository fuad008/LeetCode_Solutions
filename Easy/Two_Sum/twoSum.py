class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {}
        for x in range(len(nums)):
            if(target-nums[x]) in dict:
                return [dict[target-nums[x]], x]
            else:
                dict[nums[x]] = x