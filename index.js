

function produceDrivingRange (range) {
  return function (s1, s2) {
    let dist=Math.abs(Number(s1.split('th')[0])-Number(s2.split('th')[0]))
    if (dist >= range) {
      return `${(dist-range)} blocks out of range`
    }
    return `within range by ${range-dist}`
  }
}
function produceTipCalculator (percent) {
  return function (v) {
    return v*percent
  }
}
function createDriver(){
  let driverId = 1
  return class {
    constructor(n){
      this.id = driverId
      driverId++
      this.name = n
    }
  }
}
