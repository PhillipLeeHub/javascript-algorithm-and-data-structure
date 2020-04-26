/*
52. N-Queens II Hard

The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return the number of distinct solutions to the n-queens puzzle.

Example:

Input: 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
*/
/**
 * @param {number} n
 * @return {number}
 */
/*
Runtime: 64 ms, faster than 60.51% of JavaScript online submissions for N-Queens II.
Memory Usage: 35.3 MB, less than 80.00% of JavaScript online submissions for N-Queens II.
*/
var totalNQueens = function(n) {
    let numOfSolutions = 0;
    // Create a empty board
    let board = [...Array(n).fill('.').map(() => Array(n).fill('.'))];
    
    //console.log(board);
    return backtrack(board, 0, 0, n);
    
};

var backtrack = function(board, r, count, queenCount){
    // Note: Inorder to place N queens on NxN board, all valid boards must have 
    // 1 queen in each row. Thus, we continue only when queen is placed in a row.
    if (r >= queenCount) {
        //console.log(board)
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
            count = backtrack(board, r+1, count, queenCount);
            
            // Backtrack, revert Q to empty
            board[r][c] = '.'
        }
    }
    
    return count;
    /*
    
    if (row >= target) {
    return total + 1;
  }
  for (let col = 0; col < target; col++) {
    let isPlace = tryPlace(matrix, row, col);
    if (isPlace) {
      total = resolve(matrix, row + 1, target, total);
      matrix[row][col] = 0;
    }
  }
  return total;
  
    */
    
    
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

let testBoard1 = [ [ '.', 'Q', '.', '.' ],
                   [ '.', '.', '.', '.' ],
                   [ '.', '.', '.', '.' ],
                   [ '.', '.', '.', '.' ] ]
    
//console.log(isSpaceValid(testBoard1,1,2));
// console.log(isSpaceValid(testBoard1,3,0));
// console.log(isSpaceValid(testBoard1,3,1));
//console.log("res: ", isSpaceValid(testBoard1,3,2));
    
