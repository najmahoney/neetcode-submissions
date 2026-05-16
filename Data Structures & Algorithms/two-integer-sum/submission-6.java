class Solution {
    public int[] twoSum(int[] nums, int target) {
        int i,j, targetNum;
        for(i = 0; i < nums.length; i++){
            targetNum = target - nums[i];
            for (j = i + 1; j < nums.length; j++ ){
                if (nums[j] == targetNum){
                    return new int []{i,j};
                }
            }
        } 
        return new int[] {};
    }
}
