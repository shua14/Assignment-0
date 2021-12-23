function pairSum(nums, target) {
  if(nums.length <= 1){
    throw new Error();
  }
  
  for(let i = 0; i < nums.length; i++){
    for(let j = 0; j < nums.length; j++){
      if(i == j){
        continue;
      } else {
        if(nums[j] == target - nums[i]){
          return true;
        }
      }
    }
  }

  return false;
}

// Do not edit this line;
module.exports = pairSum;