{
  const loopCheck = (arr, checkLogic) => {
    for (let i = 0; i < arr.length - 1; i++) {
      const left = arr[i];
      const right = arr[i + 1];
      if (!checkLogic(left, right)) {
        return false;
      }
    }
    return true;
  };

  const isAsc = (arr) => {
    const checkAscLogic = (left, right) => {
      if (left > right) {
        return false;
      }
    };

    return loopCheck(arr, checkAscLogic);
  };

  const isDesc = (arr) => {
    const checkDescLogic = (left, right) => {
      if (left < right) {
        return false;
      }
    };

    return loopCheck(arr, checkDescLogic);
  };

  const isSorted = (arr) => {
    console.log('isSorted ----------');
    console.log('arr', arr);
    console.log('isDesc(arr)', isDesc(arr));
    console.log('isAsc(arr)', isAsc(arr));

    return isDesc(arr) || isAsc(arr);
  };

  console.log(isSorted([]));
  console.log(isSorted([1]));
  console.log(isSorted([1, 1, 1, 1]));
  console.log(isSorted([1, 2, 3]));
  console.log(isSorted([3, 2, 1]));
  console.log(isSorted([3, 2, 4, 1]));
}
