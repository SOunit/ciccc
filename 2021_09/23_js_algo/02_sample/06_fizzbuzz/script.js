{
  // multiples of 3, print "fizz"
  // multiples of 5, print "buzz"
  // multiples of both, print "fizzbuzz"
  function fizzbuzz(num) {}

  fizzbuzz(15);
}

{
  // multiples of 3, print "fizz"
  // multiples of 5, print "buzz"
  // multiples of both, print "fizzbuzz"
  function fizzbuzz(num) {
    for (let i = 0; i <= num; i++) {
      console.log(i);

      if (i === 0) {
        continue;
      }

      if (i % 5 === 0 && i % 3 === 0) {
        console.log('fizzbuzz');
      } else if (i % 5 === 0) {
        console.log('buzz');
      } else if (i % 3 === 0) {
        console.log('fizz');
      }
    }
  }

  fizzbuzz(60);
}
