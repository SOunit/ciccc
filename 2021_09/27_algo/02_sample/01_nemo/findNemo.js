const { performance } = require('perf_hooks');

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat'];
const large = new Array(1000).fill('nemo');

function findNemo(arr) {
  let t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'nemo') {
      console.log('Found Nemo!');
    }
  }
  let t1 = performance.now();

  const seconds = (((t1 - t0) % 6000000) / 1000).toFixed(5);

  console.log(`${t1 - t0} ms`);
  console.log(`${seconds} s`);
}

// findNemo(nemo);
// findNemo(everyone);
findNemo(large);
