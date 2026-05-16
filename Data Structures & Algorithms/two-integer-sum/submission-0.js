class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i, j , targetNum;
        for (i = 0; i < nums.length; i++){
            targetNum = target - nums[i];
            for (j = i + 1; j < nums.length; j++){
                if (targetNum === nums[j]){
                    return [i,j];
                }
            }
        }
    }
}
