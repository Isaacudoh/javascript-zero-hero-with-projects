// ## Array Methods #9

// ### Create student array

// 1. Setup students array with 5 students
// NOTE: DATA was moved to DATA.js file then linked to index file
// have access to students from data.js

// updated students
// 1. add role: "student" property to each object using MAP method
// 2. Assign to 'updatedStudents' variable and log

let updatedStudents = students.map(function (student) {
  //   console.log(student);
  student.role = "student";
  return student;
});

// console.log(updatedStudents);

// highscores

// 1. Filter array and return only score >= 80
// 2. assign to "highscores" variable and log

let highScores = students.filter(function (student) {
  // if (student.score >= 10) {
  //   return student;
  // }
  // if (student.score >= 80) return student;
  return student.score >= 80;
});

// console.log(highScores);

// specific id
// 1. find specific id in array
// 2. Assign to 'specificId' variable and log

let specificId = students.find(function (banana) {
  return banana.id === 3;
});

// console.log(specificId);

// averageScore
// 1. sum up all student.score values with reduce
// 2. divide by the length of the students array
// 3. assign to 'averageScore' and log

let averageScore =
  students.reduce(function (scoresTotal, student) {
    // console.log(student);
    // console.log(scoresTotal);
    return scoresTotal + student.score;
  }, 0) / students.length;

console.log(averageScore);
