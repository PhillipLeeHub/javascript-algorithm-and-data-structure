function bracketMatch(text) {
  /*
    ( open
    ) close 
    () valid
    “())(”
    
    Stack: ( 
    Only add to stack to "("
    Check stack not empty, then pop only for ")"
    Empty +1 to unmatch_count
    unmatch_count += stack.length
    
    Time: O(N) Where N is the number of characters
          Since we are looping through each characer
    Space: O(N) Where N is the number of characters
          Since we are adding to the stack each characer
    
   
  */
  
  // Define a stack to store "()"
  let stack = [];
  
  // Count the number of unmatches
  let unmatch_count = 0;
  
  // String to Array
  // Loop through each character 
  text.split('').forEach((char)=>{
    // if "(" push to stack
    if (char === "("){
      stack.push("(")
    }
    // if ")" and stack not empty, pop off stack
    else if (char === ")"){
      if (stack.length === 0){
        unmatch_count+=1;
      }         
      else {
        stack.pop();
      }
    }
  })
  unmatch_count += stack.length;
  return unmatch_count;
}

bracketMatch("(()");
