/*
136. Single Number Easy
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    /*
    Runtime: 56 ms, faster than 83.57% of JavaScript online submissions for Single Number.
    Memory Usage: 35.4 MB, less than 76.92% of JavaScript online submissions for Single Number.
    
    // perform XOR through the numbers.
    // the repeated numbers will cancel out and result 
    // in the single number in the array.
    */
    
    let result = 0;
    nums.forEach((num) =>{
        result = result^num
    });
    
    return result;
};
