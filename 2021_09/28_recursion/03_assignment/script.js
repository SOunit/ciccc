/* 01-----------------------Power---------------------------------------------------------------------
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  
        - do not worry about negative bases and exponents.
*/
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent) {
  if (exponent <= 0) return 1;
  return base * power(base, exponent - 1);
}

console.log('01 power-----------------');
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
  // base case
  if (arr.length === 0) {
    return 1;
  }

  const num = arr[0];
  arr.shift();

  return num * productOfArray(arr);
}

console.log('02 productOfArray-----------------');
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
  const strArr = str.split('');
  if (strArr.length === 0) {
    return '';
  }

  const char = strArr[strArr.length - 1];
  strArr.pop();

  return char + reverse(strArr.join(''));
}
console.log('03 reverse-----------------');
console.log(reverse('awesome'));
console.log(reverse('rithmschool'));

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
  return reverse(str) === str;
}
console.log('04 isPalindrome-----------------');
console.log(isPalindrome('awesome'));
console.log(isPalindrome('foobar'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('amanaplanacanalpandemonium'));
