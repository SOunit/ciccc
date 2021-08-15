console.log('hello');

// ==================================
// definition / structure
// ==================================

function consoleNumber() {
  console.log(4);
}

function getNumber() {
  const number = 1;
  return number;
}

// ==================================
// execution
// ==================================
consoleNumber();
getNumber();

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

function consoleNumberAsYouWant(number) {
  console.log('The number i want is,');
  console.log(number);
}
consoleNumberAsYouWant(2);
consoleNumberAsYouWant(7);

function consoleYourNumberWithYourName(number, name) {
  console.log('The number ' + name + ' wants is,');
  console.log(`The number ${name} wants is,`);
  console.log(number);
}
consoleYourNumberWithYourName(2, 'Jack');
consoleYourNumberWithYourName(7, 'Rebecca');

function introduceMe(person) {
  console.log(`My name is ${person.name}. My gender is ${person.gender}.`);
}
const jack = { name: 'Jack', gender: 'Male' };
introduceMe(jack);
