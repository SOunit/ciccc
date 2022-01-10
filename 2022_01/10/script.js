class Student {
  constructor(name, score1, score2) {
    this.name = name;
    this.score1 = score1;
    this.score2 = score2;
  }

  // 3. total score
  getTotalScore() {
    return this.score1 + this.score2;
  }
}

// 1. array
const students = [
  new Student("John", 47, 46),
  new Student("Bob", 23, 24),
  new Student("Nick", 40, 35),
  new Student("Alex", 44, 45),
];

// 2. limits and degrees
const limits = [91, 81, 71, 61, 51];
const degrees = ["A", "B", "C", "D", "E"];

// 4 evaluate
const evaluate = (students, limits, degrees) => {
  students.forEach((student, i) => {
    const totalScore = student.getTotalScore();
    console.log(student.name, totalScore);

    let degreeIndex;
    if (totalScore >= limits[0]) {
      degreeIndex = 0;
    } else if (totalScore >= limits[1]) {
      degreeIndex = 1;
    } else if (totalScore >= limits[2]) {
      degreeIndex = 2;
    } else if (totalScore >= limits[3]) {
      degreeIndex = 3;
    } else if (totalScore >= limits[4]) {
      degreeIndex = 4;
    }

    if (degreeIndex === 0 || degreeIndex) {
      console.log(degrees[degreeIndex]);
    } else {
      console.log("No degree");
    }
  });
};

evaluate(students, limits, degrees);
