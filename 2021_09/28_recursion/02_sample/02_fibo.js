function fiboIterative(num) {
  let arr = [0, 1];

  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  console.log(arr);
  return arr[num];
}
function fiboRecursive(num) {
  // base case 1 : more readable
  //   if (num === 0) return 0;
  //   if (num === 1) return 1;

  // base case 2 : less readable
  if (num < 2) {
    return num;
  }
  return fiboRecursive(num - 1) + fiboRecursive(num - 2);
}

const targetNum = 5;

let result = fiboIterative(targetNum);
console.log(result);

result = fiboRecursive(targetNum);
console.log(result);
