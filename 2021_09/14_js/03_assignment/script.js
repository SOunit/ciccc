const checkScore = (scoreForMatt, scoreForSimon, minimumScoreToPassTest) => {
  console.log('--------------------------');
  console.log(`minimum score is... ${minimumScoreToPassTest}`);
  console.log(`matt score is... ${scoreForMatt}`);
  console.log(`simon score is... ${scoreForSimon}`);

  // 3. if both pass
  if (
    scoreForMatt >= minimumScoreToPassTest &&
    scoreForSimon >= minimumScoreToPassTest
  ) {
    console.log('both pass the test!!');
    // 4. if matt pass
  } else if (scoreForMatt >= minimumScoreToPassTest) {
    console.log(`matt passed, his score is ${scoreForMatt}`);
    // 4. if simon pass
  } else if (scoreForSimon >= minimumScoreToPassTest) {
    console.log(`simon passed, his score is ${scoreForSimon}`);
    // 5. else case (both failed)
  } else {
    console.log(`both failed`);
  }
  console.log('--------------------------');
};

// both pass
checkScore(80, 80, 51);

// 1. create variables
let scoreForMatt = 80;
let scoreForSimon = 45;

// 2.set minimum score to pass test
const minimumScoreToPassTest = 51;

// matt pass
checkScore(scoreForMatt, scoreForSimon, minimumScoreToPassTest);

// simon pass
checkScore(40, 80, 51);

// both fail
checkScore(0, 0, 51);
