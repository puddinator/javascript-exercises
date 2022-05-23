const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let summed = 0, length = array.length;
  console.log(array);
	for(let i = 0; i < length; i++) {
    summed += array[i];
  }
  return summed;
};

const multiply = function(array) {
  let product = 1;
	for(let length = array.length, i = 0; i < length; i++) {
    product *= array[i];
  }
  return product;
};

const power = function(a, b) {
  let product = 1;
	for(let i = 0; i < b; i++) {
    product *= a;
  }
  return product;
};

const factorial = function(a) {
  let product = 1;
  for(let i = 0; i < a; i++) {
    product *= (a - i);
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
