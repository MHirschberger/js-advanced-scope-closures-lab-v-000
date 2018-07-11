const produceDrivingRange = function (blockRange) {
    return function(start, end) {
        const distance = Math.abs(parseInt(end) - parseInt(start))
        if (distance <= blockRange) {
            return `within range by ${blockRange - distance}`
        } else {
            return `${distance - blockRange} blocks out of range`
        }
    }
}

const produceTipCalculator = function (percentTip) {
    return function(fare) {
        return percentTip * fare
    }
}

const createDriver = function () {
    let ItemId = 0
    return class {
        constructor(name) {
            this.name = name
            this.id = ++ItemId
        }
    }
}