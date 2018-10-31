// "function" keyword
function s(a, b) {
  return a + b;
}

// "function" keyword assignment
const sum = function(a, b) {
  return a + b;
};

// arrow functions
const su = (a, b) => {
  return a + b;
};

// arrow functions simplified
const foo = (a, b) => (
  a + b
);

const bar = (a, b) => a + b;

const square = n => n**2;

// Callbacks
const mathOperationOnSum = (a, b, operation) => {
  const s = a + b;
  return operation(s);
}

const sqrt = n => n**2;

const result = mathOperationOnSum(5, 2, sqrt);
console.log(result);