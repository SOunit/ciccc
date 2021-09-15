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
  // embedded object
  address: {
    city: 'city something',
    street: '681 Granville',
    postal: '444-5555',
    province: 'BC',
  },
};

console.log(person);
console.log(person.age);
console.log(person.hobbires[1]);
console.log(person.address.city);

// add a property
person.email = 'test@test.com';
console.log(person.email);

const todos = [
  {
    id: 1,
    text: 'Take out trash1',
    isComplete: false,
  },
  {
    id: 2,
    text: 'Take out trash2',
    isComplete: false,
  },
  {
    id: 3,
    text: 'Take out trash3',
    isComplete: true,
  },
];

// get specific object value
console.log(todos[1].text);

// JSON(js build-in object)
console.log(todos);
const jsonData = JSON.stringify(todos);
console.log(jsonData);
console.log(JSON.parse(jsonData));

// loops
// classic for loop
for (let i = 0; i < 10; i++) {
  console.log('classic for', i);
}

// while
(() => {
  let i = 0;
  while (i < 10) {
    console.log('while', i);
    i++;
  }
})();

// do..while
(() => {
  let i = 100;
  do {
    console.log('do while', i);
    i++;
  } while (i < 10);
})();

// loop
for (let i = 0; i < todos.length; i++) {
  console.log(`todos[${i}].text:`, todos[i].text);
}

// for of -- only arrays
for (let fruit of fruits) {
  console.log('for of, ', fruit);
}

// for in -- only objects
for (let prop in person) {
  console.log('for in', prop, 'is', person[prop]);
}

// break / continue
for (let todo of todos) {
  if (todo.id === 2) {
    console.log(todo.text);
    // break;
    continue;
  }
  console.log(todo.id);
}

// Higher order array methods
// forEach -- loops through array
todos.forEach((todo, i) => {
  console.log('forEach', todo, i);
});

// map -- loops through array
// and CREATE a new array
const newTodos = todos.map((todo, i) => {
  todo.new = true;
  return todo;
});
console.log(newTodos);

// reference, pointer only
// primitive
// when copy, reference just copy reference
// primitive copy data itself

// filter - returns an array based on a CONDITION
// true stay, false drop
console.log(fruits);
const newFruits = fruits.filter((fruit) => fruit !== 'pear');
console.log(newFruits);

// conditionals
const num = 30;
const conditionNum = 10;
if (num === conditionNum) {
  console.log('num', conditionNum);
} else if (num > conditionNum) {
  console.log(`'num > ${conditionNum}'`);
} else {
  console.log(`numm is less than ${conditionNum}`);
}

const color = 'black';

// switch
switch (color) {
  case 'red':
    console.log('switch', `red`);
    break;
  case 'blue':
    console.log('switch', `blue`);
    break;
  case 'green':
    console.log('switch', `green`);
    break;
  default:
    console.log('switch', 'I dont know');
}

// ternary operator
const result = color === 'red' ? 'turnary red' : 'turnary not red';
console.log(result);
