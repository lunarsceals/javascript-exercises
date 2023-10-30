const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(list) {
  let sum = 0;
	for (let i=0;i<list.length;i++){
    sum += list[i];
  }
  return sum;
};

const multiply = function(list) {
  let product = 1;
  for (let i=0;i<list.length;i++){
    product *= list[i];
  }
  return product;
};

const power = function(n, pow) {
	return Math.pow(n,pow);
};

const factorial = function(n) {
	if (n === 0){
    return 1;
  } else {
    return n = n * factorial(n - 1);
  }
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

