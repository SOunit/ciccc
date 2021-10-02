// letter
const letter = ['m', 'a', 'd', 'z', 'p', 'i', 'e'];
// console.log(letter);
// letter.sort();
// console.log(letter);

// number
const nums = [4, 1, 6, 11, 67, 5];
console.log(nums);

nums.sort();
console.log(nums);

nums.sort(function (a, b) {
  return a - b;
});
console.log(nums);

// local
nums.sort(function (a, b) {
  return a.localeComparison(b);
});
