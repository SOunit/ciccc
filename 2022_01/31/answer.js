/**
 * 1. what is ES6?
 *      JavaScript version released in 2015, which has a lot of new features like arrow function
 *
 * 2. ES6 features
 *      1. arrow function
 *      2. let
 *      3. const
 *
 * 3. let and const
 *      reasigning of value is possible for let.
 *      not for const.
 *
 * 4. access to object
 *      person.name
 *      person[name]
 *      person["name"]
 *
 * 5. setInterval and settimeout
 *      setTimeout set certine time before execute code
 *      setInterval set interval and repeat code after a interval
 *
 * 6. what is promise
 *      a function returning a object to handle async code
 *
 * 7. convert async func to async/await
 */

const getQuote = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("quote test data");
    }, 1000);
  });
};

getQuote()
  .then((quote) => {
    console.log(quote);
  })
  .catch(function (err) {
    console.log(err);
  });

const wrapperFunc = async () => {
  try {
    const quote = await getQuote();
    console.log(quote);
  } catch (err) {
    console.log(err);
  }
};
wrapperFunc();

/**
 *
 * 8. convert function to arrow function
 *
 */

const greeting = (firstname, lastname) => {
  return `Hi, ${firstname} ${lastname}`;
};

/**
 *
 * 9. callback function
 *  a function which is passed to another function and called from the other function
 *
 */

const callbackF = () => {
  console.log("callbackF: I am callback function");
};

const call = (callback) => {
  console.log("call: I'll call callback function");
  callback();
};

call(callbackF);

/**
 * 10. pop and push
 * pop take out the last item from array, array length will be minus 1
 * push add new item to array, array length will be plus 1
 *
 * 11. what is the result?
 *  "123"
 */

var string1 = "";
var object1 = { a: 1, b: 2, c: 3 };

for (var property1 in object1) {
  // ""+1+2+3
  string1 += object1[property1];
}
console.log(string1);

/**
 * 12. what data type array.map and array.filter return?
 *  array
 *
 *
 * 13. array.includes and array.some
 *  return boolean
 *
 * 14. rest api
 *  get
 *  post
 *  patch / put
 *  delete
 *
 * 15. JSON and javascript object
 *      JSON needs "" for key.
 *      JSON format idea comes from js object.
 *      common data format used for transfering data between frontend and backend.
 *
 *      js object doesn't need "" for key.
 */
