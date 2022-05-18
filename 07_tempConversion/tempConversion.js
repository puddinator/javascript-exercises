const ftoc = function(fahrenheit) {
  return Math.round((fahrenheit - 32 ) * 50 / 9) / 10;
};

const ctof = function(celcius) {
  return Math.round((celcius * 90 / 5) + 320) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
