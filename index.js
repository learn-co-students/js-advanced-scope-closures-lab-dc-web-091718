function produceDrivingRange(blockRange) {
    return function(block1, block2) {
        let distance = Math.abs(blockToNum(block1) - blockToNum(block2));
        if (distance > blockRange) {
            return distance - blockRange + " blocks out of range";
        } else {
            return "within range by " + (blockRange - distance);
        }
    };
}

function blockToNum(block) {
    return Number.parseInt(block.replace(/st|th/, ""));
}

function produceTipCalculator(percent) {
    return amount => percent * amount;
}

function createDriver() {
    let driverId = 0;
    return class {
        constructor(name) {
            this.name = name;
            this.id = ++driverId;
        }
    };
}
