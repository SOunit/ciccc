{
  console.log('cart total sample -----------');

  const cart = [
    { name: 'a', price: 10 },
    { name: 'b', price: 20 },
    { name: 'c', price: 30 },
    { name: 'd', price: 50 },
  ];

  // return cart total
  total = cart.reduce((total, item) => {
    console.log('total', total);
    return total + item.price;
    // set initial accumulator value is 0
  }, 0);

  console.log('cart total:', total);
}

{
  // reduce sample

  // reduce image
  // create 1 value from 3 items or several items
  //　[1,2,3] => 6

  // when to use
  // when you want to count up, you create variable to save countup value
  // reduce can omit creating coutup variable

  // how to work
  // 1st argument is accumlator, accumulator stays, and go to next loop
  // 2nd argument is element in array

  console.log('reducer samples -----------');

  const cart = [
    { name: 'a', price: 10 },
    { name: 'b', price: 20 },
    { name: 'c', price: 30 },
    { name: 'd', price: 50 },
  ];

  // SAMPLE1: always return object
  let total = cart.reduce((total, item) => {
    console.log(total);
    // you need to return accumulator(= total in this sample)
    return total;
  });
  console.log(total);

  // SAMPLE2: always return 0
  total = cart.reduce((total, item) => {
    console.log(total);
    return total;
    // set initial accumulator value is 0
  }, 0);
}
