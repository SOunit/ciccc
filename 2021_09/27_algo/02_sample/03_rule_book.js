// Rule 1 : Worst case
// this here is the worst case
const everyone = ['dory', 'bruce', 'marlin', 'gill', 'bloat', 'nemo'];

function findNemo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'nemo') {
      console.log('Found Nemo!');
    }
  }
}

findNemo(everyone);

// Rule 2 : remove constants
// 4 is constant, 7 is constant

// 3 + n/2 + n/2 + 100 + 100
// 1 + n/2 + 100
// n/2 + 1
// n/2
// O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  // O(1)
  console.log(items[0]);
  // O(1)
  // 3.9 -> 3.0
  // 3.1 -> 3.0
  let middleIndex = Math.floor(items.length / 2);
  let index = 0;

  // O(n)
  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  // O(1)
  // say hi
  for (let i = 0; i < 100; i++) {
    console.log('hi');
  }
}

// O(n + n)
// O(2n)
// O(n)
function printItemsTwice(items) {
  // O(n)
  items.forEach(function (item) {
    console.log(item);
  });

  // O(n)
  items.forEach(function (item) {
    console.log(item);
  });
}

// Rule 3 : different terms for inputs

// O(n + m)
// O(n)
function printItemsTwice(items, items2) {
  // O(n)
  items.forEach(function (item) {
    console.log(item);
  });

  // O(m)
  items2.forEach(function (item) {
    console.log(item);
  });
}

const boxes = [1, 2, 3, 4, 5];

// O(n * n) = O(n^2)
function logAllPairsOfArray(arr) {
  // O(n)
  for (let i = 0; i < array.length; i++) {
    // O(n)
    for (let j = 0; j < array.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
logAllPairsOfArray(boxes);

// Rule 4 : drop non dominants
// O(n) + O(n^2)
// O(n^2)
function printAllNumbersThenAllPairSums(numbers) {
  console.log(`these are numbers`);
  // O(n)
  numbers.forEach(function (num) {
    console.log(num);
  });

  console.log(`and these are their sums`);
  // O(n^2)
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);
