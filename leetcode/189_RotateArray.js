/*
189. Rotate Array Easy
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
Note:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    //bruteForce(nums, k);
    shiftPop(nums, k)
};

shiftPop = (nums, k) => {
    /*
    Runtime: 96 ms, faster than 29.45% of JavaScript online submissions for Rotate Array.
    Memory Usage: 35.3 MB, less than 63.16% of JavaScript online submissions for Rotate Array.
    */
    for(let i=0; i<k; i++){
        nums.unshift(nums.pop());
    }
}


bruteForce = (nums, k ) => {
    /*
    Runtime: 596 ms, faster than 5.34% of JavaScript online submissions for Rotate Array.
    Memory Usage: 35.4 MB, less than 47.37% of JavaScript online submissions for Rotate Array.
    */
    numLen = nums.length -1;
    // Loop through the number of rotations
    for (let i=0; k>i; i++){
        // Save off last number
        let lastNum = nums[numLen];
        
        // Rotate each number
        for(let j=numLen; 0<=j; j--){
            if (j == 0) {
                nums[0] = lastNum;
                break;
            }
            // Set current num to one before
            nums[j] = nums[j-1];
        }
    }
}
