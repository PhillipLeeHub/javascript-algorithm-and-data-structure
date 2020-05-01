/*
406. Queue Reconstruction by Height Medium
Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.

 
Example

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
*/
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    /*
    Pick out tallest group of people and sort them in a subarray (S).
    Since there's no other groups of people taller than them, 
    therefore each guy's index will be just as same as his k value.
    
    For 2nd tallest group (and the rest), insert each one of them into (S) by k value. So on and so forth.
    E.g.
    input: [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
    subarray after step 1: [[7,0], [7,1]]
    subarray after step 2: [[7,0], [6,1], [7,1]]
    
    
    [5,0][7,0] [6,1] [5,2][7,1]
    ...
    
    */
    let line = [];
 
    // Sort by height, tallest to shortest
    // If height are the same, sort by k smallest to largest
    people.sort(sortHeight)
    
    // Loop through all people starting with tallest
    people.forEach((person) => {
        //console.log(line)
        // insert person in index k
        line.splice(person[1], 0, person);
    })
    return line;
};

var sortHeight = function(a, b) {
    // Compare height
    if (a[0] === b[0]){
        // Height are the same, compare k
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1]<b[1]) ? -1 : 1;   
        }
    }
    else {
     return (a[0]<b[0]) ? 1 : -1;   
    }
}
