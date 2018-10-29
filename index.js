function produceDrivingRange(blockRange) {
  return function(blockOne, blockTwo) {
    const dist = blockTwo.slice(0,2) - blockOne.slice(0,2);
    const diff = blockRange - dist

    if (diff > 0) {
      return `within range by ${diff}`;
    } else {
      return `${Math.abs(diff)} blocks out of range`
    }
  }
}

// function produceTipCalculator(percentage) {
//   return function(initialAmount) {
//     return initialAmount * percentage
//   }
// }

function produceTipCalculator(percentage) {
  return initialAmount => initialAmount * percentage;
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}