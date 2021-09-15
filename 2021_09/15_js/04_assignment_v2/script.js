console.log('hello from js');

// 1. create students, push object
const students = [];
students.push({ name: 'John', score1: 47, score2: 46 });
students.push({ name: 'Bob', score1: 23, score2: 24 });
students.push({ name: 'Nick', score1: 40, score2: 35 });
students.push({ name: 'Alex', score1: 44, score2: 45 });
students.push({ name: 'Bad', score1: 0, score2: 0 });

// 2. create two arrays
const criterias = [
  { grade: 'A', score: 91 },
  { grade: 'B', score: 81 },
  { grade: 'C', score: 71 },
  { grade: 'D', score: 61 },
  { grade: 'E', score: 51 },
  { grade: 'F', score: 41 },
];

// 3. calc total
const calcTotal = (student) => {
  return student.score1 + student.score2;
};

// 4. add evaluation to students
const evaluateStudents = (students) => {
  const studentsWithGrade = students.map((student) => {
    let count = 0;
    student.total = calcTotal(student);
    console.log('total', student.total, student.name);
    criterias.forEach((criteria) => {
      console.log('student', student);
      console.log('criteria.score', criteria.score);
      if (student.total >= criteria.score && count === 0) {
        student.grade = criteria.grade;
        count++;
      }
    });

    console.log(student);

    if (!student.grade) {
      student.grade = 'failed';
    }

    return student;
  });

  return studentsWithGrade;
};

const studentsWithGrade = evaluateStudents(students);
console.log(studentsWithGrade);
