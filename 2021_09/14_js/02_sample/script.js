(function () {
  // hoisting?
  console.log(a);
  var a = 10;

  // hoisting for function
  // hoisting for var is undefined, not error
  var test;
  console.log(test);
  console.log(hoist);

  function hoist() {}

  test = () => {};
})();
