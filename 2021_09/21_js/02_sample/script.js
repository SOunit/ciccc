var globalVal = 'global';

function nest1() {
  console.log('nest1---------------');
  var local1 = 'local1';

  globalVal += ' nest1';
  console.log(local1);

  if (typeof local2 === 'undefined') {
    console.log("local2 doesn't exist");
  } else {
    console.log(local2);
  }

  console.log(globalVal);

  function nest2() {
    console.log('nest2---------------');
    globalVal += ' nest2';

    var local2 = 'local2';
    console.log(local1);
    console.log(local2);
    console.log(globalVal);
  }

  nest2();
}

nest1();

const check = (str) => {
  console.log('---------');
  const reversed = str.split('').reverse().join('');
  console.log(str);
  console.log(reversed);

  console.log(str === reversed);
  console.log('---------');
};

check('str');
check('ssttss');
check('paper');
check('mountain');
check('iPhone');
check('StephJobs');
check('a bottle of water');
