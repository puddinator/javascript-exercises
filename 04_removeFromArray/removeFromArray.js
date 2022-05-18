const removeFromArray = function() {
    arrayLength = arguments[0].length;
    let numberOfMatches = 0;
    for (let i = 0; i < arrayLength; i++) {
        for (let j = 1; j < arguments.length; j++) {
            console.log(arguments[0][i]);
            console.log(arguments[j]);
            if (arguments[0][i - numberOfMatches] === arguments[j]) {
                arguments[0].splice(i - numberOfMatches, 1);
                numberOfMatches++;
            }
        }
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
