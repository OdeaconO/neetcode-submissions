class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let longest = 0;

        for(let num of nums){
            if(!numSet.has(num - 1)){
                let length = 1;
                let currentNum = num;
                while(numSet.has(currentNum + 1)){
                    length++;
                    currentNum++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}
