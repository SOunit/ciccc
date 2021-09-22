const dispQuiz = (title, cb) => {
  console.log(`---- ${title} ----`);
  cb();
};

// 1. method + function =>  this is pointing object which has method
dispQuiz('method + function', () => {
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
});

// 2. method + arrow function =>  this is pointing empty object?
dispQuiz('method + arrow function', () => {
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
});

// 3. global context => this points window object
dispQuiz('global context', () => console.log(this));
