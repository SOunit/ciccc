// operator
// operator needs two numbers left and right
2 + 2;
2 - 2;
2 / 2;
2 * 2;

// function
// 1. receive items, process, return ONE value;
// 2. function, you can use multiple times
function add(num1, num2) {
  var result = num1 + num2;
  result += 30;
  result -= 100;
  result /= 2;
  result *= 2;
  return result;
}

var result = add(100, 50);
console.log('result number is', result);

result = add(200, 150);
console.log('result number is', result);

result = add(20, 150);
console.log('result number is', result);
