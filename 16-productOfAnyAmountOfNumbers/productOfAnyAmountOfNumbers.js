function productOfAnyAmountOfNumbers(...args) {
  
  let total = 1;
  args.forEach(element => total *= element);

  return total;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;