console.log('hello');

// function structure
// 1. receive params / argument
// 2. process
// 3. return ONE value

// function steps
// 1. define function
// 2. execute function

// ==================================
// definition / structure
// ==================================
// 1. params = no params
function consoleNumber() {
  // 2. process
  console.log(4);
  // 3. return value = nothing
}

// 1. params = no params
function getNumber() {
  // 2. process
  const number = 1;

  // 3. return value
  return number;
}

// ==================================
// execution
// ==================================
consoleNumber();

// process => 1
// result => 1;
// 1;
getNumber();

// IMAGE: function becomes returned values after execution
// getNumber(); => 1;
1;
5;

// 2 lines below are almost same
let result = getNumber();
result = 1;

result = getNumber();
console.log(result);

console.log(getNumber());

// ==================================
// problems
// ==================================
// without prams
// always same result
