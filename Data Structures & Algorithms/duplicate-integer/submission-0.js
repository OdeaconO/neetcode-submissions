class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};

        for(let char of nums){
            map[char] = (map[char] || 0) + 1;
        }

        for(let char in map){
            if(map[char] !== 1){
                return true;
            }
        }

        return false;
    }
}
