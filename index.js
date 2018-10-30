function produceDrivingRange(range){
	return (start,destination) => {
		let distance = ( parseInt(destination.slice(0,2) - parseInt(start.slice(0,2)) )) 
		let difference = range  - distance														
		return   difference > 0 ? `within range by ${difference}` : `${Math.abs(difference)} blocks out of range`
	}

}

function produceTipCalculator(num){
	return tip => num*tip
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }

}