const { performance } = require('perf_hooks');

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  console.log(total);
}

let t0 = performance.now();
addUpTo(100);
let t1 = performance.now();

const seconds = (((t1 - t0) % 6000000) / 1000).toFixed(5);
console.log(`${t1 - t0} ms`);
console.log(`${seconds} s`);

//
// S = 1 + 2 + 3 + 4 + ... + 97 + 98 + 99 + 100
// S = 100 + 99 + 98 + 97 + ... + 4 + 3 + 2 + 1
// 2S = 101 + 101 + 101 + ... + 101 + 101 + 101
// 2S = 100 * 101
// S = (100 * 101) / 2
// S = (n * n + 1) / 2
