// to check connection
console.log('hello from js');

// ========================================
// task 2
// ========================================
// create 5 variables using animal names
var cat = 'Tom';
var dog = 'Sam';
var bird = 'Jack';
var pig = 'Kevin';
var monkey = 'Kate';

// select dom elements
var catDispDiv = document.getElementById('js-disp1');
var dogDispDiv = document.getElementById('js-disp2');
var birdDispDiv = document.getElementById('js-disp3');
var pigDispDiv = document.getElementById('js-disp4');
var monkeyDispDiv = document.getElementById('js-disp5');

// check selecting dom elements
console.log(catDispDiv);
console.log(dogDispDiv);
console.log(birdDispDiv);
console.log(pigDispDiv);
console.log(monkeyDispDiv);

// display names
catDispDiv.innerHTML = 'animal name here is, ' + cat;
dogDispDiv.innerHTML = 'animal name here is, ' + dog;
birdDispDiv.innerHTML = 'animal name here is, ' + bird;
pigDispDiv.innerHTML = 'animal name here is, ' + pig;
monkeyDispDiv.innerHTML = 'animal name here is, ' + monkey;

// ========================================
// task 3
// ========================================
// 49 + 20 - 19
function calc1() {
  return 'calc1 answer is, ' + (49 + 20 - 19);
}
var result = calc1();
console.log(result);

// ========================================
// task 4
// ========================================
// 30 + 20 * 10
function calc2(num1, num2, num3) {
  return `calc2 answer is ${num1 + num2 * 10}`;
}
result = calc2(30, 20, 10);
console.log(result);

// ========================================
// task 5
// ========================================
function calc3(num1, num2, num3) {
  return `calc3 answer is ${num1 + num2 + num3}`;
}

result = calc3(40, 20, -10);
console.log(result);
