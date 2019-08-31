/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /*
    Runtime: 56 ms, faster than 83.04% of JavaScript online submissions for Two Sum.
    Memory Usage: 35.5 MB, less than 19.84% of JavaScript online submissions for Two Sum.
    */
    let map = {}
    for (i = 0; i < nums.length; i++) {
        if(nums[i] in map){
            return [map[nums[i]], i];
        }
        else{
            map[target-nums[i]] = i;
        }
    }
};