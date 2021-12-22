function sumOfNumsWithinARange(nums, start, end) {
  count = 0;

  flag = false; 
  for(let i = 0; i < nums.length; i++){
    if(!flag){
      if(nums[i] == start){
        count++; 
        flag = true; 
      }
    } else{
        if(nums[i] == end){
          return ++count;
        } else{
          count++;
        }
    }
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;