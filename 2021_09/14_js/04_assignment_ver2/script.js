const evaluateStudents = (students, minScore) => {
  const studentsCount = students.length;
  let passCount = 0;

  // check score
  students.map((student) => {
    console.log(`Student ${student.name}'s score is ${student.score}`);
    if (student.score >= minScore) {
      console.log(`${student.name} passed! `);
      passCount++;
    } else {
      console.log(`${student.name} failed...`);
    }
  });

  // evaluate
  if (passCount === studentsCount) {
    console.log('all passed!!!');
  } else if (passCount === 0) {
    console.log('all failed...!');
  }

  console.log('----------------');
};

const minScore = 50;

// all passed
let students = [
  { name: 'Taro', score: 80 },
  { name: 'Simon', score: 80 },
];
evaluateStudents(students, minScore);

// simon only
students = [
  { name: 'Taro', score: 40 },
  { name: 'Simon', score: 80 },
];
evaluateStudents(students, minScore);

// taro only
students = [
  { name: 'Taro', score: 80 },
  { name: 'Simon', score: 40 },
];
evaluateStudents(students, minScore);

// nobody
students = [
  { name: 'Taro', score: 40 },
  { name: 'Simon', score: 40 },
];
evaluateStudents(students, minScore);
