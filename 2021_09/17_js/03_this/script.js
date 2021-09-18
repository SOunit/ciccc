// // how to tell this
// // 1. function?
// // 2. arrow function? / function keyword?
// // if function keyword
// // function -> this = global object / window

// // 1.
// // method?
// // arrow function? / function keyword?
// // if function keyword
// // method -> this = object

// // 1. function
// // this is pointing to a global object
// function a() {
//   console.log('from a():', this);

//   function b() {
//     console.log('from b()', this);
//   }
//   b();
// }

// // 2. method
// // 1. function
// var person = {
//   // はびえる？はびえ-
//   firstName: 'Javier',
//   getName: function () {
//     // how to overcome missing this ref
//     var _self = this;
//     const showName = function () {
//       console.log('showName _self', _self.firstName);
//       return this.firstName;
//     };
//     console.log('showName()', showName());
//     return this.firstName;
//   },
// };

// console.log('person.getName()', person.getName());

// // a();

// // const a2 = () => {
// //   console.log('from a2', this);

// //   const b2 = () => {
// //     console.log('from b2', this);
// //   };

// //   b2();
// // };

// // a2();

// const hhh = 'hhh';
// let ddd = 'ddd';
// this.name = 'global name';

// var a2 = () => {
//   this.name = 'name';
//   console.log('from a2', this);

//   var b2 = () => {
//     console.log('from b2', this);
//   };

//   b2();
// };

// a2();

//

// var a = 10;
// var a = 1110;
// console.log(a);

// var a! = 10;
// console.log(a!);

// let x = 10 / 2 + (6 + 4) * 2 - 5;
// console.log('x ', x);

// console.log(1 + 2 * (4 % 3));
// console.log(2 + 5 + '8');

// let x = '17';
// let y = 2;
// console.log(y + x);

// let x = '3';
// let y = 2;
// console.log(y * x);

// let x = '3';
// let y = 2;
// let z = x + y;
// console.log(z);

// let x, y, z;
// y = 2;
// z = x + y;
// console.log(x);
// console.log(y);
// console.log(z);

// console.log(3 * 4 + (5 + 6) * 1 * 0);

// console.log(1 + '2' + 4 + 2);
// console.log(10 - '3' * 2 + 3);
// console.log(102 % 5);
// console.log(1 + 5 + 'bottles of milk');

// let a = 3;
// let b = 2;
// let c = a;
// a = b = c = 1;
// console.log(a);

// const myVal = '5';
// let myAddedVal = myVal + 10;
// console.log(myAddedVal);

// let y = 3,
//   x = y++;
// console.log(x);

// let a = 0;
// console.log(a++);
// console.log(a);

// console.log('1 plus 1 is ' + 1 + 1);

// console.log(typeof 4);
// console.log(typeof 4.0);
// console.log(typeof -4);

let message = 'Hello JS';
alert(Message);
