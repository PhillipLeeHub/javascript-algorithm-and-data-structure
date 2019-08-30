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