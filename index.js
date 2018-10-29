const produceDrivingRange = (blockRange) => (startBlock, endBlock) => {

  let start = parseInt(startBlock);
  let end = parseInt(endBlock);
  let distanceToTravel = Math.abs(end - start);
  let difference = blockRange - distanceToTravel;

  if ( difference > 0) {
    return `within range by ${difference}`
  } else {
    return `${Math.abs(difference)} blocks out of range`
  }

};

const produceTipCalculator = (percent) => (amount) => {
  return amount * percent;
};

const createDriver = name => {
  let id = 0;
  return class {
    constructor (name) {
      this.name = name,
      this.id = ++id
    }
  }
}
