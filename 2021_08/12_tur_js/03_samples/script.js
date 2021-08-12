// connection check
console.log('Hello from js');

// ===========================
// task 1
// ===========================

// create a varible
var letters;
// but content is empty = (undefined)
console.log(letters);

// assign a value to varible
letters = 'some lestters';
console.log(letters);

// string(=text with double quote)
// string has string method
// method means a
var upperCase = letters.toUpperCase();

// what happens behind a scene
// var uppserCase = 'some letters'.toUpperCase();
// var uppserCase = 'SOME LETTERS';

console.log(upperCase);

// =============================
// task 2
// =============================

// prompt();

// function
// 1. receive arguments
// 2. process
// 3. return ONE value

// function sample
// 1. receive arguments, num1, num2
function add(num1, num2) {
  // 2.process
  var result = num1 + num2;
  //  3. return ONE value
  return result;
}

// how to execute function
var calcResult = add(100, 10);
console.log(calcResult);

// complex function sample
function complex(num1, num2) {
  var result = num1 + num2;
  result = result + num2;
  result *= 2;

  return result;
}

// propmt is one of functions
// var result = "ssss";

var userInput = prompt();
userInput = parseInt(userInput);
console.log('userInput', userInput);

var randomNumber = Math.floor(Math.random() * 10) + 1;
randomNumber = 5;

// 1. Math.random => 0.839394
// 2. Math.random * 10 => 3.3909303(0, 9) + 1
// 3. Math.floor(5.39029320) => 5

console.log('randomNumber', randomNumber);

// randomNumber = 5
// userInput = "5"
if (randomNumber === userInput) {
  console.log('Good Work');
} else {
  console.log('Not matched');
}

// ==============================
// task 4
// ==============================
