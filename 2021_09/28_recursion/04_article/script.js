{
  const data = [12, 13, 11, 14, 10];

  // [5,4]
  const replace = (arr, fromIndex, toIndex) => {
    const saved = arr[toIndex];
    arr[toIndex] = arr[fromIndex];
    arr[fromIndex] = saved;
  };

  const selectionSort = (arr) => {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1 + i; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          replace(arr, i, j);
        }
      }
    }
    return arr;
  };

  console.log(selectionSort(data));
}
