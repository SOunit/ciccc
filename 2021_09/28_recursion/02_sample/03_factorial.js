// 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorialIterative(num) {
  let product = 1;

  for (let i = 2; i <= num; i++) {
    product *= i;
  }

  return product;
}

// last num is 1
// pass 5 * 5 - 1
function factorialRecursive(num) {
  // base case
  if (num === 1) {
    return 1;
  }

  return num * factorialRecursive(num - 1);
}

console.log(factorialIterative(7));
console.log(factorialRecursive(7));
