// 3 + n + n + n + n
// BIG O (3 + 4n) => O(n)
function funChallenge(input) {
  // O(1)
  let a = 10;
  // O(1)
  a = 50 + 3;

  // O(n)
  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction();
    // O(n)
    let stranger = true;
    // O(n)
    a++;
  }

  // O(1)
  return a;
}

// 4 + 7n
// BIG O(4 + 7n) => O(n)
function anotherFuncChallenge(input) {
  // O(1)
  let a = 5;
  // O(1)
  let b = 10;
  // O(1)
  let c = 50;

  // O(n)
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1;
    // O(n)
    let y = i + 2;
    // O(n)
    let z = i + 3;
  }

  // O(n)
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j + 1;
    // O(n)
    let m = j + 2;
  }

  // O(1)
  let string = 'I dont know';
}
