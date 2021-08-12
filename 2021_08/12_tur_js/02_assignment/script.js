console.log('hello from js');

// ====================
// task 1
// ====================
console.log('sample'.toUpperCase());

// ====================
// task 2
// ====================
const match = () => {
  // get user input
  let userInput = prompt('please enter number 1 - 10');
  userInput = parseInt(userInput);

  // create random number
  let randomNum = Math.floor(Math.random() * 10) + 1;

  // for debug
  // randomNum = 5;

  // check values
  console.log('userInput', userInput);
  console.log('randomNum', randomNum);

  // show message
  if (userInput === randomNum) {
    console.log('Good Work');
  } else {
    console.log('Not matched');
  }
};

// FIXME:
// comment out temporarily
// prompt is annoying for finishing other tasks
// match();

// ====================
// task 3
// ====================
let sampleArray = [10, 1, 10, 1, 10];
// will be [9, 1, 9, 1, 9];

// replace 10 to 9
const replaceNums = (arr, targetNum, replacedNum) => {
  arr.map((item, i) => {
    if (item === targetNum) {
      arr[i] = replacedNum;
    }
  });
  return arr;
};

// replace 10 to 9
let result = replaceNums(sampleArray, 10, 9);
console.log(result);

// replace2
const replace2 = (arr, targetNum) => {
  arr.map((item, i) => {
    arr[i] = targetNum;
  });
  return arr;
};

// all will be 3
result = replace2(sampleArray, 3);
console.log(result);

// ====================
// task 4
// ====================
const sortArray = (arr) => {
  return arr.sort();
};

sampleArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(sortArray(sampleArray));
sampleArray = ['Z', 'A', 'D', 'K'];
console.log(sortArray(sampleArray));

// ====================
// task 5
// ====================
const reverseArr = (arr) => {
  return arr.reverse();
};

let sampleString = 'book';
console.log(reverseArr(sampleString.split('')));
sampleString = 'how are you?';
console.log(reverseArr(sampleString.split('')));

// ====================
// task 6
// ====================
const customers = [
  { name: 'Jack', email: 'jack@gmail.com', order: 1000 },
  { name: 'Rebecca', email: 'rebecca@gmail.com', order: 300 },
  { name: 'Kevin', email: 'kevin@gmail.com', order: 400 },
];

const showHighestOrderInCustomers = (customers) => {
  let max = 0;
  customers.map((customer) => {
    if (max < customer.order) {
      max = customer.order;
    }
  });
  return max;
};

console.log(showHighestOrderInCustomers(customers));
