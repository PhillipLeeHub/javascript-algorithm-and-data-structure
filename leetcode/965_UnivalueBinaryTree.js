/*
A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

Example 1:

Input: [1,1,1,1,1,null,1]
Output: true
Example 2:


Input: [2,2,2,5,2]
Output: false


Note:

The number of nodes in the given tree will be in the range [1, 100].
Each node's value will be an integer in the range [0, 99].
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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    //return recursive(root, null);
    return iterative(root);
};

var recursive = function(root, value){
    /*
    Runtime: 96 ms, faster than 5.27% of JavaScript online submissions for Univalued Binary Tree.
    Memory Usage: 37.3 MB, less than 14.29% of JavaScript online submissions for Univalued Binary Tree.
    */
    if (root === null){
        return true;
    }

    if (value === null){
        value = root.val;
    }

    if (value !== root.val){
        return false;
    }

    return recursive(root.left, value) && recursive(root.right, value)
}

var iterative = function(root){
    /*
    Runtime: 48 ms, faster than 93.48% of JavaScript online submissions for Univalued Binary Tree.
    Memory Usage: 34 MB, less than 28.57% of JavaScript online submissions for Univalued Binary Tree.
    */
    let stack = [root]
    let value = root.val

    while(stack.length > 0) {
        let node = stack.pop();

        if (node === null){
            continue;
        }

        if (node.val !== value){
            return false;
        }
        stack.push(node.left);
        stack.push(node.right);
    }

    return true
}