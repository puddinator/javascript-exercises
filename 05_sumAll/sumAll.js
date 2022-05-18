const sumAll = function(bigInt, smallInt) {
    if (Number.isInteger(bigInt) == 0 || Number.isInteger(smallInt) == 0 ||
            bigInt < 0 || smallInt < 0) {
        return 'ERROR';
    }

    if (smallInt > bigInt) {
        let temp = smallInt;
        smallInt = bigInt;
        bigInt = temp;
    }
    let sum = 0;
    for (let i = smallInt; smallInt <= bigInt; smallInt++) {
        sum += smallInt
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
