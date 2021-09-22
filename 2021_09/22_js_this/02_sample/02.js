// console.log(a);

// b();

// var a = 10;

// function b() {
//   console.log('Hello');
// }

// if (true) {
//   var a = 10;
// } else {
//   var b = 20;
// }

// console.log(a, b);

var obj = {
  name: 'name',
  address: {
    thisFunc: function () {
      console.log(this);
      console.log(obj);
      console.log(obj === this);
    },
  },
  thisFunc2: function () {
    console.log(this);
  },
};

obj.address.thisFunc();
obj.thisFunc2();
