console.log('hello from js');

// global object and window object
// not on window object
const aaaConst = 'test';
let bbbLet = 'test';

// on window object
var cccVar = 'test';

const str = 'Hello World';

console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.substring(0, 5));
console.log(str.split(''));
console.log(str.split(' '));
console.log(str.split('l'));

// Array
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'orange', 'pear', 'grape'];
console.log(fruits);
console.log(fruits[3]);

// addin a value
console.log(fruits[4]);
fruits[4] = 'lemon';
console.log(fruits[4]);

// array method
fruits.push('banana');
console.log(fruits);

// big o annotation ( how efficiency some code is )
// speed different by machines
const removed = fruits.pop();
console.log(removed);
console.log(fruits);

// add to 1st index
fruits.unshift('strawberry');
console.log(fruits);

// remove 1st index
fruits.shift();
console.log(fruits);

// check if array
console.log(typeof fruits);
console.log(Array.isArray(fruits));

// get index
// return index of item
// -1 for not found
console.log(fruits.indexOf('orange'));

// object literal
const objectLiteral = {
  key: 'value',
  property: 'value',
};

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 45,
  hobbires: ['book', 'water'],
  address: {
    city: 'something',
    street: '681 Granville',
    postal: '444-5555',
    province: 'BC',
  },
};

console.log(person);
