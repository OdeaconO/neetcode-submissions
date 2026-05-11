class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};

        for(let num of nums){
            map[num] = (map[num] || 0) + 1;
        }

        let arr = Object.entries(map);
        arr.sort((a,b) => b[1] - a[1]);

        let result = [];

        for(let i = 0; i < k; i++){
            result.push(arr[i][0]);
        }

        return result;
    }
}
