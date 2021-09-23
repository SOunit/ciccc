{
  function sumDelta(arr) {
    let total = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      let value1 = arr[i];
      let value2 = arr[i + 1];

      let delta = Math.abs(value1 - value2);
      total += delta;
    }

    return total;
  }

  // waht if
  // - the array is empty
  // - there's just one value in array?
  // - two values?
  // - many values?
  console.log(sumDelta([]));
  console.log(sumDelta([9]));
  console.log(sumDelta([12, 8]));
  console.log(sumDelta([2, 6, 9, 30]));
}
