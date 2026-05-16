class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // if (nums.length <= 2) return [];
        for (let i = 0; i < nums.length; i++) {
            let findtargetnum = target - nums[i];
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] === findtargetnum) {
                    return [i, j];
                }
            }
        }
    }
}
