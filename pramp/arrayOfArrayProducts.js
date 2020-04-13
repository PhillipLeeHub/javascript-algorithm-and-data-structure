function arrayOfArrayProducts(arr) {
/*
Time = O(3N) = O(N)
Space = O(3N) = O(N)
arr = [8, 10, 2]
      [2, 10 ,8]
      
      [1,      8*1,  10*8*1] -- left
X     [10*2*1, 2*1,       1] -- right
  ----------------------------------------   
      [10*2,   8*2,    8*10]
     
output: [20, 16, 80]
*/
  let arr_left = [1];
  let arr_right = [1];
  let arr_out = [];
  
  if (arr.length === 1){
    return [];
  } 
  
  for(let i=1; i<arr.length; i++){
    arr_left.push(arr_left[i-1] * arr[i-1]);
  }
  
  for(let j=arr.length-2; j>=0; j--){
    arr_right.push(arr_right[arr.length-2 - j] * arr[j+1]);
  }
  for(let i=0; i<arr.length; i++){
    arr_out.push(arr_left[i] * arr_right[arr.length - 1 - i]);
  }
  
  return arr_out;
}


const arr = [8, 10, 2]
const arr2 = [2, 7, 3, 4]
console.log(arrayOfArrayProducts(arr));
console.log(arrayOfArrayProducts(arr2));
