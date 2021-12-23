function setUnionOfAnyAmountOfSets(...args) {
  const bigSet = new Set();
  
  for(let set of args){
    for(let item of set){
      bigSet.add(item);
    }
  }
  
  return bigSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;