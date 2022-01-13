/* ===========================================================
/* ===================== Question 1 ==========================
/* ===========================================================
Define a function called "rant" which accepts a 
string argument called "message". The function 
should print out an uppercased version of "message" 3 
times (with 3 separate calls to console.log) 

For example, rant("I hate beets") should print out:
I HATE BEETS
I HATE BEETS
I HATE BEETS
===========================================================*/
const rant = (message) => {
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
};
console.log("Q1");
rant("I hate beets");

/* ===========================================================
/* ===================== Question 2 ==========================
/* ===========================================================
Write a simple function "multiply" which accepts two 
numerical arguments and returns their product 
(multiply them together).  
Make sure to return the value instead of printing it!

multiply(2,3) //6
multiply(9,9) //81
multiply(5,4) //20
=========================================================== */
console.log("Q2");
const multiply = (num1, num2) => {
  return num1 * num2;
};
console.log(multiply(4, 4));

/* ===========================================================
/* ===================== Question 3 ==========================
/* ===========================================================
I often struggle to know whether I should wear shorts or pants 
on a given day. (this is a complete lie.  
It's really not that hard to decide.) Please help me decide by 
writing me a function called "isShortsWeather"

-   It should accept a single number argument, which we will 
    call temperature (but you can name it whatever you want, 
    of course). 
-   If "temperature" greater than or equal to 75, return true
-   Otherwise, return false
-   This exercise assumes temperature is in Fahrenheit.  
    I apologize to all my Celsius-using students!

isShortsWeather(80) //true
isShortsWeather(48) //false
isShortsWeather(75) //true
=========================================================== */
const isShortsWeather = (temperature) => {
  if (temperature >= 75) {
    return true;
  }
};

/* ===========================================================
/* ===================== Question 4 ==========================
/* ===========================================================
Please write a function called "lastElement" which accepts a 
single array argument.  The function should return the last 
element of the array (without removing the element).  If the 
array is empty, the function should return null.

lastElement([3,5,7]) //7
lastElement([1]) //1
lastElement([]) //null
=========================================================== */
const lastElement = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  return arr[arr.length - 1];
};

console.log("Q4");
console.log(lastElement([0, 1, 2]));

/* ===========================================================
/* ===================== Question 5 ==========================
/* ===========================================================
Define a function called "capitalize" that accepts a string 
argument and returns a new string with the first letter capitalized
(but the rest of the string unchanged).  

capitalize('eggplant') //"Eggplant"
capitalize('pamplemousse') //"Pamplemousse"
capitalize('squid') //"Squid"
=========================================================== */
const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
console.log(capitalize("eggplant"));
console.log(capitalize("squid"));

/* ===========================================================
/* ===================== Question 6 ==========================
/* ===========================================================
Write a function called "sumArray" which accepts a single argument: 
an array of numbers.  It should return the sum of all the numbers 
in the array.

sumArray([1,2,3]) //6
sumArray([2,2,2,2]) //8
sumArray([50,50,2]) //102
=========================================================== */
const sumArray = (arr) => {
  return arr.reduce((total, num) => num + total, 0);
};
console.log(sumArray([1, 2, 3]));
console.log(sumArray([2, 2, 2, 2]));
console.log(sumArray([50, 50, 2]));

/* ===========================================================
/* ===================== Question 7 ==========================
/* ===========================================================
Write a function called "returnDay". this function takes in one 
parameter (a number from 1-7) and returns the day of the week 
(1 is Monday, 2 is Tuesday, etc.)  If the number is less than 
1 or greater than 7, the function should return null. In some 
countries Sunday is treated as the first day of the week, but 
for this exercise we will use Monday as the first day.

Hint: store the days of the week in an array, or use an object 
with numerical keys.  When the function is called, plug the 
number into the array/object you've created to retrieve the 
corresponding day name and then return that value.

returnDay(1) //"Monday"
returnDay(4) //"Thursday"
returnDay(8) //null
=========================================================== */
const returnDay = (num) => {
  if (num > 7) {
    return null;
  }

  const days = {
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Tur",
    5: "Fri",
    6: "Sat",
    7: "Sun",
  };

  return days[num];
};
console.log("Q7");
console.log(returnDay(1));
console.log(returnDay(2));
console.log(returnDay(3));
console.log(returnDay(4));
console.log(returnDay(5));
console.log(returnDay(6));
console.log(returnDay(7));
console.log(returnDay(8));

/* ===========================================================
/* ===================== Question 8 ==========================
/* ===========================================================
In some dice games like Craps, a roll of two 1's is called 
"Snake Eyes". It's generally not a good roll. Please write a 
function called "isSnakeEyes", which accepts two numbers as inputs, 
representing two dice.  If the two numbers are both 1's, 
please print "Snake Eyes!" otherwise print "Not Snake Eyes!" 

isSnakeEyes(1,5); //Not Snake Eyes!
isSnakeEyes(6,3); //Not Snake Eyes!
isSnakeEyes(1,1); //Snake Eyes!
=========================================================== */
const isSnakeEyes = (num1, num2) => {
  let message = "Not Snaek Eyes!";
  if (num1 === num2 && num1 === 1) {
    message = "Snake Eyes!";
  }

  console.log(message);
};

isSnakeEyes(1, 5);
isSnakeEyes(6, 3);
isSnakeEyes(1, 1);

/* ===========================================================
/* ===================== Question 9 ==========================
/* ===========================================================
You know how old your dog is in human years, but what about dog 
years? Calculate it!

Write a function named "calculateDogAge" that:
-   Takes 1 argument: your puppy's age.
-   Calculates your dog's age based on the conversion rate of 
    1 human year to 7 dog years.
-   Outputs the result to the screen like so: "Your doggie is 
    NN years old in dog years!"

calculateDogAge(1); //Your doggie is 7 years old in dog years!
calculateDogAge(0.5); //Your doggie is 3.5 years old in dog years!
calculateDogAge(12); //Your doggie is 84 years old in dog years!
=========================================================== */
const calculateDogAge = (puppyAge) => {
  let rate = 7;
  console.log(`Your doggie is 
    ${puppyAge * rate} years old in dog years!`);
};
calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);

/* ===========================================================
/* ===================== Question 10 =========================
/* ===========================================================
A pangram is a sentence or expression that uses all the letters 
of the alphabet. The best known pangram in English is "The quick 
brown fox jumps over the lazy dog," 
Write a function name "isPangram" that determins if a sentence 
is a pangram. It should return a boolean value.

isPangram('abcdefghijklmnopqrstuvwxyz'); //true
isPangram('the quick brown fox jumps over the lazy dog') //true
isPangram('five boxing wizards jump quickly at it'); //false
=========================================================== */
const isPangram = (str) => {
  const alphabets = {};

  str.split("").forEach((char) => {
    if (char !== " ") {
      alphabets[char] = char;
    }
  });

  let count = 0;
  for (let key in alphabets) {
    count++;
  }

  return count === 26 ? true : false;
};

console.log(
  isPangram("abcdefghijklmnopqrstuvwxyz") //true
);
console.log(
  isPangram("the quick brown fox jumps over the lazy dog") //true
);
console.log(
  isPangram("five boxing wizards jump quickly at it") //false
);

/* ===========================================================
/* ===================== Question 11 =========================
/* ===========================================================
Write a function "evens" that accepts an array as an argument, 
and returns an array consisting of all of the *even* numbers 
in that array.

// evens([1, 2, 3, 4, 5, 6, 7, 8]);
=========================================================== */
const evens = (arr) => {
  let newArr = [];
  arr.forEach((element) => {
    if (element % 2 === 0) {
      newArr.push(element);
    }
  });

  return newArr;
};
console.log(evens([1, 2, 3, 4, 5, 6, 7, 8]));

/* ===========================================================
/* ===================== Question 12 =========================
/* ===========================================================
Write a function "max" that accepts an array of numbers and 
returns the *largest* number in the array.

max([1, 5, 10, 15]); //15
max([99, 0, -1, 45]); //99
=========================================================== */
const max = (arr) => {
  return arr.reduce((maxNum, num) => {
    if (maxNum < num) {
      maxNum = num;
    }

    return maxNum;
  }, 0);
};

console.log(max([1, 5, 10, 15]));
console.log(max([99, 0, -1, 45]));
