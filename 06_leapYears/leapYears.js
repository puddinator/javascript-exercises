const leapYears = function(year) {
    breakme: if (year % 4 == 0) {
        if (year % 100 == 0 && year % 400 != 0) {
            break breakme;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
