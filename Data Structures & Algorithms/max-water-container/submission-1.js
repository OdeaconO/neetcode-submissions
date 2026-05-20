class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;

        let left = 0;
        let right = heights.length - 1;

        while(left < right){
            let width = right - left;
            let minHeight = Math.min(heights[left], heights[right]);
            let area = width * minHeight;

            maxWater = Math.max(maxWater, area);

            if(heights[left] < heights[right]){
                left++;
            }else {
                right--;
            }
        }

        return maxWater;
    }
}
