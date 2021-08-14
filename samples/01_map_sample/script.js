console.log('hello from js');

// map
// map is a kind of for loop

// why you use map?
// shorter syntax, less typing

// base syntax
// arr.map(()=>{})

// map sample
const nameArr = ['jack', 'rebbeca', 'kevin', 'kate', 'randoll'];
nameArr.map((item) => {
  // console.log(item, 'from map');
});

// explain
// for loop format
for (let i = 0; i < nameArr.length; i++) {
  // console.log(nameArr[i], 'from for loop');
}

// map sample 2
const peopleArr = [
  { name: 'jack', age: 38 },
  { name: 'rebecca', age: 38 },
  { name: 'kevin', age: 12 },
];

// 1. you pass a function to map
// 2. pass a label to each item inside an array
peopleArr.map((item) => {
  console.log(item);
});

// output expect
