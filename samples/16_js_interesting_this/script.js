// 3. global context => this points window object
{
  console.log('global context');
  console.log(this);
}

// 1. method + function =>  this is pointing object which has method
{
  console.log('method + function');
  var obj = {
    name: 'name',
    thisFunc1: function () {
      console.log('thisFunc1 this', this);
    },
    address: {
      thisFunc2: function () {
        console.log('thisFunc2 this', this);
        console.log('thisFunc2 obj', obj);
        console.log('thisFunc2 obj === this', obj === this);
      },
    },
  };

  obj.thisFunc1();
  obj.address.thisFunc2();
}

// 2. method + arrow function =>  this is pointing empty object?
{
  console.log('method + arrow function');
  var obj = {
    name: 'name',
    address: {
      thisFunc: () => {
        console.log('thisFunc this', this);
        console.log('thisFunc obj', obj);
        console.log('thisFunc obj === this', obj === this);
      },
    },
    thisFunc2: () => {
      console.log('thisFunc2 this', this);
    },
  };

  obj.address.thisFunc();
  obj.thisFunc2();
}

{
  console.log('function in method');
  var obj = {
    test: function () {
      console.log('test', this);
      function test2() {
        console.log('test2', this);
      }
      test2();
    },
  };
  obj.test();
}
