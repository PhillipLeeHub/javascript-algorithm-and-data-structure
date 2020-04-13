function getNumberOfIslands(binaryMatrix) {
  let islandCount = 0;
  // { (i,j): 1}
  let visited_dict = {};
  
  // Loop through entire 
  for (let i = 0; i < binaryMatrix.length; i++ ){
    for (let j = 0; j < binaryMatrix[i].length; j++ ){
      // check is visted
      if (!([i,j] in visited_dict)){
        // Search for islands
        if (binaryMatrix[i][j] == 1) {
          islandCount+=1  
          // Depth first search
          DFS(i,j,binaryMatrix,visited_dict);
        }
      }
    }
  }
  return islandCount;
}
function searchCell(i, j, binaryMatrix, stack){
    if ((0 <= i) && (i < binaryMatrix.length) && (0 <= j) && ( j < binaryMatrix[0].length)){
      if (binaryMatrix[i][j] == 1){
        stack.push([i,j]);
      }
    }
}

function DFS(i, j, binaryMatrix, visited_dict) {
  let stack = [];
  stack.push([i,j]);
  // Keep 
  while( stack.length != 0) { 
    let coor_arr = stack.pop()
    let i = coor_arr[0];
    let j = coor_arr[1];
    
    // Convert island to 0
    binaryMatrix[i][j] = 0;
    searchCell(i+1,j, binaryMatrix, stack);
    searchCell(i-1,j, binaryMatrix, stack);
    searchCell(i,j+1, binaryMatrix, stack);
    searchCell(i,j-1, binaryMatrix, stack);   
  } 
}

binaryMatrix = [ [0,    1,    0,    1,    0],
                 [0,    0,    1,    1,    1],
                 [1,    0,    0,    1,    0],
                 [0,    1,    1,    0,    0],
                 [1,    0,    1,    0,    1] ]
      
      
console.log(getNumberOfIslands(binaryMatrix))
