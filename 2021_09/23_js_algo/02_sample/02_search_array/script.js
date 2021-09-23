{
  const contains = (arr, targetNum) => {
    return arr.includes(targetNum);
  };

  console.log('own ---------------');
  console.log(contains([], 67));
  console.log(contains([67], 67));
  console.log(contains([67, 1, 2, 3], 8));
}

{
  const contains = (arr, targetNum) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === targetNum) {
        return true;
      }
    }
    return false;
  };

  console.log('sample ---------------');
  console.log(contains([], 67));
  console.log(contains([67], 67));
  console.log(contains([67, 1, 2, 3], 8));
}

{
  const isSorted = (arr) => {
    console.log(arr);
    for (let i = 1; i < arr.length; i++) {
      const left = arr[i - 1];
      const right = arr[i];
      if (left > right) {
        return false;
      }
    }
    return true;
  };

  console.log('sorted ? ---------------------');
  console.log(isSorted([]));
  console.log(isSorted([1]));
  console.log(isSorted([10, 2]));
  console.log(isSorted([1, 2]));
  console.log(isSorted([15, 2, 3, 4, 5]));
  console.log(isSorted([1, 2, 3, 4, 5]));
}
