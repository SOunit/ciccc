// call stack size exceeded
function inception() {
  inception();
}

// inception();

function countDown(num) {
  console.log(num);
  num--;

  // base case
  num > 0 ? countDown(num) : null;
}

countDown(10);

function addUpTo(num) {
  // base case
  if (num === 1) {
    return 1;
  }

  // 5 + /addUpTo(4)/
  // 5 + /4 + [addUpTo(3)]/
  // 5 + 4 + [3 + /addUpTo(2)/]
  // 5 + 4 + 3 + /2 + addUpTo(1)/
  // 5 + 4 + 3 + 2 + /1/
  return num + addUpTo(num - 1);
}

let result = addUpTo(5);
console.log(result);

// fibonacci value
0, 1;
0, 1, 1;
0, 1, 1, 2;
0, 1, 1, 2, 3;
0, 1, 1, 2, 3, 5;
0, 1, 1, 2, 3, 5, 8;
0, 1, 1, 2, 3, 5, 8, 13;
0, 1, 1, 2, 3, 5, 8, 13, 21;
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
// get fib value of index 4
result = fib(4);
console.log(result);
