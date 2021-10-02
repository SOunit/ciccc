const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log('i', i);
      console.log('array[j]', array[j]);
      console.log('array[j + 1]', array[j + 1]);
      if (array[j] > array[j + 1]) {
        console.log('swap');
        // swap the numbers
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
};

console.log(numbers);
bubbleSort(numbers);
console.log(numbers);
