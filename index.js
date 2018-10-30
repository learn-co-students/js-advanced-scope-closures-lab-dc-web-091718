function produceDrivingRange(range){
  return function(startPoint, endPoint) {
    let start = (startPoint.slice(0, startPoint.length - 2))
    let end = (endPoint.slice(0, endPoint.length - 2))
    const distance = Math.abs(start - end)
    console.log(start)
    console.log(end)
    if (distance < range) {
      return `within range by ${range - distance}`
    }
    else {
      return `${distance - range} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare){
    return fare * tip
  }
}
function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
    this.name = name;
    this.id = ++driverId
  }
  }
}
