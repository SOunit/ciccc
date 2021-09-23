console.log('hello from js');

var cat = 'value cat';

var sampleVar = 10;

console.log();

// how to change HTML contents from JS
// 1. access to HTML tag from JS
//      1. id for target one tag from JS
// 2. add content to HTML tag from JS

// 1. grab html tag from JS
var pTagForCat = document.querySelector('#js-cat');
console.log(pTagForCat);

// 2. add content to HTML tag from JS
pTagForCat.innerHTML = cat;

// definition
function hi() {
  // definition
  function hello() {
    // definition
    function hey() {}
    // call 3
    hey();
  }
  // call 2
  hello();
}

// call 1
hi();

hello();

function hello() {}
