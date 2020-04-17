/*
419. Battleships in a Board Medium

Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
You receive a valid board, made of only battleships or empty slots.
Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
Example:
X..X
...X
...X
In the above board there are 2 battleships.
Invalid Example:
...X
XXXX
...X
This is an invalid board that you will not receive - as battleships will always have a cell separating between them.
Follow up:
Could you do it in one-pass, using only O(1) extra memory and without modifying the value of the board?

 Space O(1)
 Time  O(N) where N is each cell
 Runtime: 72 ms, faster than 8.51% of JavaScript online submissions for Battleships in a Board.
Memory Usage: 37.8 MB, less than 33.33% of JavaScript online submissions for Battleships in a Board.
*/
var countBattleships = function(board) {
    let shipCount = 0;
    for (let i=0; i < board.length; i++) {
        for (let j=0; j < board[i].length; j++) {
            if (board[i][j] === 'X'){
                DFS(board, i, j);
                shipCount+=1;
            }
        }
    }
    return shipCount;
};

var DFS = function(board, _i, _j) {
    let stack = [[_i,_j]];
    
    while(stack.length !== 0) {
        let point = stack.pop();
        const i = point[0];
        const j = point[1];
        
        board[i][j] = '.';
        searchCell(board, i+1,j, stack);
        searchCell(board, i-1,j, stack);
        searchCell(board, i,j+1, stack);
        searchCell(board, i,j-1, stack);
    }
}

var searchCell = function(board, _i, _j, stack) {
    if ((0 <= _i ) && (_i < board.length) && (0 <= _j) && (_j<board[_i].length)){
        if (board[_i][_j] === 'X'){
            stack.push([_i,_j]);
        }
    }
}
