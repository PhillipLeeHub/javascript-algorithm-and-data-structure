/*
51. N-Queens Hard

The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

Example:

Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.

*/
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    // Stores an array of boards
    let boardArr = [];
    // Generate board
    let board = Array(n).fill().map(() => Array(n).fill('.'))
    backtrack(board,0, 0, n, boardArr);
    
    return boardArr;
};

var backtrack = function(board, r, count, queenCount, boardArr){
    // Note: Inorder to place N queens on NxN board, all valid boards must have 
    // 1 queen in each row. Thus, we continue only when queen is placed in a row.
    if (r >= queenCount) {
        // Clone the array
        boardArr.push(board.map((arr) => arr.join('')));
        return count+1;
    }
    
    // Loop through all the columns
    for (let c =0; c < board.length; c++) {
        // Check if valid space
        if (isSpaceValid(board, r, c)) {
            // Place Queen in this location
            board[r][c] = 'Q'
            
            // Found valid row, move to next row
            // Function will 'spawn' new paths from this placement
            count = backtrack(board, r+1, count, queenCount, boardArr);
            
            // Backtrack, revert Q to empty
            board[r][c] = '.'
        }
    }
    
    return count;    
}

var isSpaceValid = function(board, r, c) {
    for (let i =0; i < board.length; i++) {
        if (board[r][i] === 'Q') {
            return false;
        }  
        if (board[i][c] === 'Q') {
            return false;
        }  
        
        // top left dia
        if ((r-i) >= 0 && (c-i) >= 0) {
            if (board[r-i][c-i] === 'Q') {
                return false;
            }  
        }
        // top right dia
        if ((r-i) >=0 && (c+i) < board.length) {
            //console.log('r-i: ', r-i, 'c+i: ', c+i, 'i: ',i, 'board: ', board[r-i][c+i])
            if (board[r-i][c+i] === 'Q') {
                return false;
            }  
        }
        
        // bot right dia
        if ((r+i) < board.length && (c+i) >= 0) {
            if (board[r+i][c+i] === 'Q') {
                return false;
            }  
        }
        
        // bot left dia
        if ((r+i) < board.length && (c-i) >= 0) {
            if (board[r+i][c-i] === 'Q') {
                return false;
            }  
        }
    }
    return true;
}
