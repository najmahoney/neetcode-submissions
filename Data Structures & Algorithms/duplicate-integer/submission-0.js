class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsMap = new Set();

        for (const i of nums){
            if (numsMap.has(i)){
                return true;
            }
            numsMap.add(i);
        }
        return false;
         
    }
}
