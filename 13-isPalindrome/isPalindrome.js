function isPalindrome(word) {
  start = 0; 
  end = word.length - 1;
  
  while(start < end){
    if(word[start] == word[end]){
      start++;
      end--;
    } else{
      return false; 
    }
  }

  return true; 
}

// Do not edit this line;
module.exports = isPalindrome;