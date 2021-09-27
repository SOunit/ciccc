{
  // check all
  // make false if asc or desc fail
  function isSorted(arr) {
    console.log(arr);

    let isDescending = true;
    let isAscending = true;

    for (let i = 1; i < arr.length; i++) {
      let v1 = arr[i - 1];
      let v2 = arr[i];

      if (v1 < v2) {
        isDescending = false;
      }

      if (v1 > v2) {
        isAscending = false;
      }
    }

    console.log('isDescending', isDescending);
    console.log('isAscending', isAscending);

    return isAscending || isDescending;
  }

  console.log(isSorted([]));
  console.log(isSorted([1]));
  console.log(isSorted([1, 2, 3]));
  console.log(isSorted([3, 2, 1]));
  console.log(isSorted([3, 2, 1, 2, 3]));
  console.log(isSorted([1, 2, 3, 2, 1]));
}
