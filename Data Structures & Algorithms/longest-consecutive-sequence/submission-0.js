class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        let count = 1;
        let maxCount = 0;
        const sortedNums = nums.sort((a, b) => a - b);

        for (let i = 0; i < sortedNums.length; i++) {
            if (sortedNums[i] === sortedNums[i - 1]) {
                continue;
            } else if (sortedNums[i] === sortedNums[i - 1] + 1) {
                count++;
            } else {
                maxCount = Math.max(maxCount, count);
                count = 1
            }
        }
        return Math.max(maxCount, count);
    }
}
