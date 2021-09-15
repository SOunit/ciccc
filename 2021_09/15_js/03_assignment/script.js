console.log('hello from js');

// 1. create students, push object
const students = [];
students.push({ name: 'John', score1: 47, score2: 46 });
students.push({ name: 'Bob', score1: 23, score2: 24 });
students.push({ name: 'Nick', score1: 40, score2: 35 });
students.push({ name: 'Alex', score1: 44, score2: 45 });

// 2. create two arrays
const scores = [91, 81, 71, 61, 51];
const grades = ['A', 'B', 'C', 'D', 'E'];

// 3. calc total
const calcTotal = (student) => {
  return student.score1 + student.score2;
};

// 4. add evaluation to students
const evaluateStudents = (students) => {
  const studentsWithGrade = students.map((student) => {
    const total = calcTotal(student);
    console.log(total, student.name);

    if (total >= scores[0]) {
      student.grade = grades[0];
    } else if (total >= scores[1]) {
      student.grade = grades[1];
    } else if (total >= scores[2]) {
      student.grade = grades[2];
    } else if (total >= scores[3]) {
      student.grade = grades[3];
    } else if (total >= scores[4]) {
      student.grade = grades[4];
    }

    console.log(student);

    return student;
  });

  return studentsWithGrade;
};

const studentsWithGrade = evaluateStudents(students);
console.log(studentsWithGrade);
