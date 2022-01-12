/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//Dummy Data
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
let gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  },
};

let ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  },
};

let fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  },
};

//For question 5:
let myPenguin = {
  character: "Captain Cook",
  origin: "Mr. Popper's Penguins",
  author: "Richard and Florence Atwater",
  notes:
    "Children's book about a housepainter who ends up with a flock of penguins.",
};

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  //End of Dummy Data
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  Question 1:
  Create a new variable named penguins 
  and set it equal to an array that lists these three penguins! 
  (Hint: remember you can put variable names inside an array, 
    not just hard-coded values! And remember that variable names don't have quotes around them.)
  
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
const penguins = [gunter, ramon, fred];
console.log("Q1", penguins);

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  Question 2:
  Access the first penguin in the list 
  and print it to the console using console.log() 
  -- notice that you can see all the properties and methods of that object 
  listed in the console! (Hint: remember that array indexes start counting at 0, not 1!)
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
console.log("Q2", penguins[0]);

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  Question 3:
  Create a new variable called secondPenguin 
  and set it equal to the second penguin in your penguins array.
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
const secondPenguin = penguins[1];
console.log("Q3", secondPenguin);

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  Question 4:
  Print to the console the name of the last penguin in the list.
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
console.log("Q4", penguins[penguins.length - 1].name);

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  Question 5:
  Remember the penguin you created earlier, 
  with the variable name of myPenguin? Add that penguin to the end of the penguins array!
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
penguins.push(myPenguin);
console.log("Q5", penguins);

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  Question 6:
  Print the length of the penguins array to the console.
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
console.log("Q6", penguins.length);

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  Question 7:
  Write one more line of code to change the first penguin's canFly property 
  to the value true (overriding its existing value).
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
penguins[0].canFly = true;
console.log("Q7", penguins);

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  Question 8:
  Call the sayHello method of the first penguin in your penguins array!
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
console.log("Q8");
penguins[0].sayHello();

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  Question 9:
  Iterate through every penguin in the array and print the value of each penguin's name property to the console.
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

console.log("Q9");
for (let i = 0; i < penguins.length; i++) {
  console.log(penguins[i].name);
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  Question 10:
  Write a for loop to call the sayHello method of every penguin in the array!
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
console.log("Q10");
for (let i = 0; i < penguins.length; i++) {
  console.log(i);

  if (!penguins[i].sayHello) {
    continue;
  }

  penguins[i].sayHello();
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  BONUS:
  Write a method that reverses input array
  
  [1, 2, 3] => [3, 2, 1]
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

const reverse = (array) => {
  //solution here
  let arr = [];
  for (let index = 0; index < array.length; index++) {
    arr.push(array[array.length - 1 - index]);
  }
  return arr;
};
const data = [1, 2, 3];
console.log("BONUS");
console.log(data);
console.log(reverse(data)); // [3, 2, 1]
