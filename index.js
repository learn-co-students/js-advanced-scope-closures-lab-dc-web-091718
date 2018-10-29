function produceDrivingRange(blockRange) {
  return function(startingBlock, endBlock) {
    let start = parseInt(startingBlock);
    let end = parseInt(endBlock);
    let distance = Math.abs(end - start);
    let distanceToGo = blockRange - distance;

    if (distanceToGo > 0) {
  return `within range by ${distanceToGo}`;
    } else {
  return `${Math.abs(distanceToGo)} blocks out of range`;
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
