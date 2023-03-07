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
  if (student.score >= 10) {
    return student;
  }
});

console.log(highScores);
