var globalVal = 'global';

function nest1() {
  console.log('nest1---------------');
  var local1 = 'local1';

  globalVal += ' nest1';
  console.log(local1);

  if (typeof local2 === 'undefined') {
    console.log("local2 doesn't exist");
  } else {
    console.log(local2);
  }

  console.log(globalVal);

  function nest2() {
    console.log('nest2---------------');
    globalVal += ' nest2';

    var local2 = 'local2';
    console.log(local1);
    console.log(local2);
    console.log(globalVal);
  }

  nest2();
}

nest1();

const check = (str) => {
  console.log('---------');
  const reversed = str.split('').reverse().join('');
  console.log(str);
  console.log(reversed);

  console.log(str === reversed);
  console.log('---------');
};

check('str');
check('ssttss');
check('paper');
check('mountain');
check('iPhone');
check('StephJobs');
check('a bottle of water');

const people = [
  { name: 'a', age: 10 },
  { name: 'b', age: 10 },
  { name: 'c', age: 10 },
  { name: 'd', age: 10 },
];

console.log(
  'every',
  people.every((person) => person.age >= 20)
);
console.log(
  'some',
  people.some((person) => person.age >= 20)
);

const nums = [100, 200, 300];

// accumulator, current
nums.reduce((sum, num) => {
  console.log(sum);
  console.log(num);
  return sum + num;
});

people.reduce((acc, current) => {
  console.log('acc', acc);
  console.log('current', current);
  return acc + current.age;
}, 0);

var firstNames = ['John', 'Mary', 'Joseph'];
var lastNames = ['Smith', 'Doe', 'Brown'];

var fullNames = firstNames.reduce((accumulator, current, index) => {
  console.log('accumulator', accumulator);
  accumulator.push(current + lastNames[index]);
  return accumulator;
}, []);

console.log(fullNames);
