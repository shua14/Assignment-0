function frequencyCounter(word) {
  let map = new Map();

  for(let i = 0; i < word.length; i++){
    if(map.has(word.charAt(i))){
      map.set(word.charAt(i), map.get(word.charAt(i)) + 1);
    } else{
      map.set(word.charAt(i), 1);
    }
  }
  
  return Object.fromEntries(map);
}

// Do not edit this line;
module.exports = frequencyCounter;