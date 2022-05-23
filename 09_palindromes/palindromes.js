const palindromes = function (string) {
    let newString = string.toLowerCase().replace(/[^a-z]/g,"").split("").reverse().join("");
    if (newString === string.toLowerCase().replace(/[^a-z]/g,"")) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
