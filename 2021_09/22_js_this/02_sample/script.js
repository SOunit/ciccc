{
  console.log('hi from js');

  const name = 'John';
  let age = 28;
  let profession = 'instructor';

  function personES5() {
    console.log(
      'My name is ' +
        name +
        ', and ' +
        age +
        " years old and I'm a /an " +
        profession
    );
  }

  personES5();

  function personES6() {
    console.log(`My name is ${name}, I'm ${age} and I'm a / an ${profession}`);
  }

  personES6();

  let greet = 'Hello world';
  console.log(`greet.startsWith('Hello')`, greet.startsWith('Hello'));
  console.log(`greet.endsWith('world')`, greet.endsWith('world'));
  console.log(`greet.includes('wo')`, greet.includes('wo'));
  console.log(`greet.repeat(3)`, greet.repeat(3));
}

{
  const numbers = [2, 4, 6, 8];
  let doubles = numbers.map((number) => number * 2);
  console.log(doubles);

  let doubles2 = numbers.map(function (number) {
    return number * 2;
  });
  console.log(doubles2);
}

{
  const numbers = [0];
  console.log(numbers);
}

{
  const numbers = [1, 2, 3, 4, 5];
  const result = numbers.reduce((accumulator, num) => accumulator + num);
  console.log(result);
}

{
  var personES5 = {
    firstName: 'Jack',
    lastName: 'Pearson',
    getFullName: function () {
      var _self = this;
      return function () {
        console.log(this);
        console.log(_self);
      };
    },
    getFullName2: function () {
      return function () {
        console.log(this);
      }.bind(this);
    },
  };

  personES5.getFullName()();
  personES5.getFullName2()();

  const personES6 = {
    firstName: 'Jack',
    lastName: 'Pearson',
    // es5 in method gives this to object reference
    getFullName: function () {
      var _self = this;
      console.log(this);
      return () => {
        console.log(this);
        console.log(_self);
      };
    },
    // es6 method gives no connection to object
    getFullName2: () => {
      console.log(this);
      return () => {
        console.log(this);
      };
    },
  };

  personES6.getFullName()();
  personES6.getFullName2()();
}

{
  function personES5(firstName, lastName, profession) {
    if (firstName === undefined) {
      firstName = 'default firstName';
    }
    if (lastName === undefined) {
      lastName = 'default lastName';
    }
    if (profession === undefined) {
      profession = 'default profession';
    }
    console.log(`${firstName} ${lastName} ${profession}`);
  }

  personES5();
  personES5('a', 'b', 'c');

  function personES6(
    firstName = 'firstName',
    lastName = 'lastName',
    profession = 'profession'
  ) {
    console.log(`${firstName} ${lastName} ${profession}`);
  }
  personES6();
  personES6('a', 'b', 'c');
}

{
  console.log('spread -----------------');

  // ES5
  const numbers1 = [1, 2, 3, 4];
  const numbers2 = [5, 6, 7, 8];
  let numbers3 = [];
  numbers3 = numbers1.concat(numbers2);
  console.log(numbers3);

  // ES6
  numbers3 = [-2, -1, 0, ...numbers1, 100, 200, 300, ...numbers2, 9, 10, 11];
  console.log(numbers3);

  // spread
  // spread is shallow copy
  const people = ['a', 'b', 'c'];
  const newPeople = [...people, 'd', 'e'];
  console.log(people);
  console.log(newPeople);

  const person = { name: 'name', age: 30 };
  const newPerson = { ...person, test: 'test' };
  console.log(person);
  console.log(newPerson);

  const deepNums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], 10, 11, 12];
  console.log([...deepNums]);
  const deepPeople = [{ name: 'test', test: { t: ['t', 't'] } }];
  console.log({ ...deepPeople });
}

{
  // without ES6, with ES5
  const a = function (x, y) {
    // why you do this?
    // to create new array, this is how in ES5
    const args = Array.prototype.slice.call(arguments);

    console.log('a ----------------');
    // almost same data, why you do this?
    console.log(arguments);
    console.log(args);

    console.log(x, y, arguments[2], arguments[3]);
    console.log(x, y, args[2], args[3]);
    console.log(x, y);
    console.log(x + y);
  };
  a(10, 20, 30, 40);

  const b = (x, y, ...rest) => {
    console.log('b ----------------');
    console.log(x, y);
    console.log(x + y);
    console.log('rest', ...rest);
    console.log('rest[2]', rest[0]);
    console.log('rest[3]', rest[1]);
  };
  b(10, 20, 30, 40);

  const family = (lastName, ...names) => {
    console.log(names);
    names.forEach((name) => console.log(`${name} ${lastName}`));
  };

  family('Smith', 'Jane', 'Sally', 'John', 'Derick');
}

{
  const arr = [10, 20, 30, 40, 50, 60];
  const ten = arr[0];
  const twenty = arr[1];
  console.log(ten, twenty);

  const [a, b, , , e] = arr;
  console.log(a, b, e);

  const [f, g, , , ...items] = arr;
  console.log(f, g, items);

  const person = { name: 'name', age: 30 };
  const firstName = person.firstName;
  const lastName = person.lastName;
  console.log(firstName, lastName);

  const { name, age } = person;
  console.log(name, age);

  const aboutMe = (params) => {
    const { name, age } = params;
    console.log(name, age);
  };

  aboutMe(person);

  const aboutMe2 = ({ name, age }) => {
    console.log(name, age);
  };

  aboutMe2(person);
}

{
  console.log('Map ----------------');
  const people = [
    { id: 1, name: 'Jack1' },
    { id: 2, name: 'Jack2' },
    { id: 3, name: 'Jack3' },
    { id: 4, name: 'Jack4' },
    { id: 5, name: 'Jack5' },
  ];

  const mapData = new Map();
  console.log('new Map', mapData);

  people.forEach((person) => mapData.set(person.id, person));
  console.log('set Map', mapData);

  people.push({ id: 6, name: 'Jack6' });
  people.push({ id: 7, name: 'Jack7' });
  people.push({ id: 8, name: 'Jack8' });
  people.push({ id: 9, name: 'Jack9' });

  people.forEach((person) => mapData.set(person.id, person));
  console.log('set Map again', mapData);

  mapData.delete(1);
  mapData.delete(2);
  mapData.delete(3);
  console.log('delete Map', mapData);

  console.log('Map has key 1 ?', mapData.has(1));
  console.log('Map has key 7 ?', mapData.has(7));

  console.log('Map get key 7', mapData.get(7));

  console.log('Map size', mapData.size);

  mapData.forEach((value, key) => {
    console.log('Map value', value);
    console.log('Map key', key);
  });

  // like array
  for (let data of mapData) {
    console.log(data);
    console.log(data[0]);
    console.log(data[1]);
  }

  for (let key of mapData.keys()) {
    console.log(key);
    console.log(mapData.get(key));
  }

  console.log('map entries');
  for (let value of mapData.entries()) {
    console.log('value', value);
    console.log('value[0]', value[0]);
    console.log('value[1]', value[1]);
  }

  console.log('map entries destruction');
  for (let [key, value] of mapData.entries()) {
    console.log('key', key);
    console.log('value', value);
  }

  mapData.clear();
  console.log('clear Map', mapData);
}

// SET
console.log('SET -------------');
const setData = new Set();
console.log('new Set()', setData);

setData.add('John');
console.log('Set add', setData);
