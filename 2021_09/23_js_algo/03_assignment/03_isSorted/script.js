// {
//   function isSorted(arr) {
//     let result;
//     if (
//       arr.every(function (value, i) {
//         return i === 0 || value >= arr[i - 1];
//       })
//     ) {
//       result = true;
//     } else if (
//       arr.every(function (value, i) {
//         return i === 0 || value <= arr[i - 1];
//       })
//     ) {
//       result = true;
//     } else {
//       result = false;
//     }
//     return result;
//   }

//   console.log(isSorted([]));
//   console.log(isSorted([42]));
//   console.log(isSorted([39, 42]));
//   console.log(isSorted([42, 39]));
//   console.log(isSorted([1, 2, 3, 4, 5]));
//   console.log(isSorted([5, 4, 3, 2, 1]));
//   console.log(isSorted([1, 5, 2]));
//   console.log(isSorted([1, 2, 3, 6, 8, 5, 1, 6]));
// }

{
  const isDesc = (arr) => {
    return arr.every((left, i) => {
      const right = arr[i - 1];
      return i === 0 || left >= right;
    });
  };

  const isAsc = (arr) => {
    return arr.every((left, i) => {
      const right = arr[i - 1];
      return i === 0 || left <= right;
    });
  };

  const isSorted = (arr) => {
    console.log(arr);
    return isDesc(arr) || isAsc(arr);
  };

  // true
  console.log(isSorted([]));
  console.log(isSorted([42]));
  console.log(isSorted([39, 42]));
  console.log(isSorted([1, 2, 3, 4, 5]));
  console.log(isSorted([42, 39]));
  console.log(isSorted([5, 4, 3, 2, 1]));
  // false
  console.log(isSorted([1, 5, 2]));
  console.log(isSorted([1, 2, 3, 6, 8, 5, 1, 6]));
}
