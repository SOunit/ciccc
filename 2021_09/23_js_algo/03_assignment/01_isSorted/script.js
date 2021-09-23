{
  const isAsc = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      const left = arr[i];
      const right = arr[i + 1];
      if (left > right) {
        return false;
      }
    }
    return true;
  };

  const isDesc = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      const left = arr[i];
      const right = arr[i + 1];
      if (left < right) {
        return false;
      }
    }
    return true;
  };

  const isSorted = (arr) => {
    console.log('isSorted ----------');
    console.log('arr', arr);

    console.log('isDesc(arr)', isDesc(arr));
    console.log('isAsc(arr)', isAsc(arr));

    // return true / false
    // 1. desc=true, asc=true => true
    // 2. desc=true, asc=false => true
    // 3. desc=false, asc=true => true
    // 4. desc=false, asc=false => false
    return isDesc(arr) || isAsc(arr);
  };

  console.log(isSorted([]));
  console.log(isSorted([1]));
  console.log(isSorted([1, 1, 1, 1]));
  console.log(isSorted([1, 2, 3]));
  console.log(isSorted([3, 2, 1]));
  console.log(isSorted([3, 2, 4, 1]));
  console.log(isSorted([1, 4, 7, 3, 2]));
}
