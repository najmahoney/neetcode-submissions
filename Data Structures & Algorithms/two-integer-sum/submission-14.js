class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numMap = new Map();

        for(let i = 0; i < nums.length; i++){
            let twoSum = target - nums[i];
            if (numMap.has(twoSum)){
                return [numMap.get(twoSum), i]
            }
            numMap.set(nums[i], i);
        }
    }
}
