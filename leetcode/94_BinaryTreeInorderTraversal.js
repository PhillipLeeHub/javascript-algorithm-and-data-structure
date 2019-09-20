/*
94. Binary Tree Inorder Traversal Medium
Medium

1951

85

Favorite

Share
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {    
    //return recursive(root, []);
    return iterative(root);
};

var recursive = function(root, outputArr) {
    /*
    Runtime: 52 ms, faster than 77.50% of JavaScript online submissions for Binary Tree Inorder Traversal.
    Memory Usage: 33.8 MB, less than 59.38% of JavaScript online submissions for Binary Tree Inorder Traversal.
    */
    if (root === null){
        return []
    }
    
    recursive(root.left, outputArr);
    outputArr.push(root.val);
    recursive(root.right, outputArr);
    
    return outputArr;
};

let iterative = (root) => {
    /*
    Runtime: 48 ms, faster than 92.11% of JavaScript online submissions for Binary Tree Inorder Traversal.
    Memory Usage: 33.8 MB, less than 59.38% of JavaScript online submissions for Binary Tree Inorder Traversal.
    let stack = [];
    let outputArr = [];
    
    // Set root to initial node
    let node = root;
    
    // Keep looping while stack not empty
    while(stack.length !== 0  || node !== null) {
        // Keep traversing left node while left child exist
        while (node !== null){
            // Push this node on to stack
            stack.push(node);
            
            // Go to the left child
            node = node.left
        }
        
        // At this point all of the left child of the root node is added to the stack.

        // Pop off the last node
        node = stack.pop();
        
        // Add node value to result array
        outputArr.push(node.val);
        
        // Add the right child
        node = node.right;           
    }
    return outputArr;
}
