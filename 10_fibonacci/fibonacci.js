const fibonacci = function(whichNumber) {
    let oldFibNumber = 0;
    let newFibNumber = 1;
    let temp = 0
    if (whichNumber < 0) return "OOPS";
    for (let i = 0; i < whichNumber - 1; i++) {
        temp = newFibNumber;
        newFibNumber += oldFibNumber;
        oldFibNumber = temp;
    }
    return newFibNumber;

};

// Do not edit below this line
module.exports = fibonacci;
