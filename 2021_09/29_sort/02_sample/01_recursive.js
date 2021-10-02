/* 01-----------------------Power---------------------------------------------------------------------
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  
        - do not worry about negative bases and exponents.
*/
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, ex) {
  // 2^4 = 2 * 2 * 2 * 2
  //     = 2 * 2^3
  //     = 2 * 2 * 2^2
  //     = 2 * 2 * 2 * 2^1
  //     = 2 * 2 * 2 * 2 * 1

  if (ex === 0) return 1;
  return base * power(base, ex - 1);
}
console.log('==============');
console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));

/* 02-----------------------productOfArray---------------------------------------------------------------------
Write a function called 'productOfArray' which takes in an array of numbers and 
returns the product of them all.
*/
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  // base case 1
  if (arr.length === 0) return 1;
  // base case 2
  if (arr.length === 1) return arr[0];

  //   return arr.shift() * productOfArray(arr);
  return arr[0] * productOfArray(arr.slice(1));
}
console.log('==============');
console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));

/* 03-----------------------reverse---------------------------------------------------------------------
Write a recursive function called 'reverse' which accepts a string and returns 
a new string in reverse.
*/
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  // add whatever parameters you deem necessary - good luck!

  // base case
  if (str.length === 1) return str;

  return reverse(str.slice(1)) + str[0];
}

/* 04-----------------------isPalindrome---------------------------------------------------------------------
Write a recursive function called 'isPalindrome' which returns true if the string 
passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false.
*/
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!

  // base case
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  // check first and last
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));

  return false;
}

console.log(isPalindrome('awesome'));
console.log(isPalindrome('foobar'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('amanaplanacanalpandemonium'));
