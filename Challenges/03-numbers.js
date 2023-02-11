/*

Number #3
1. create "score1", "score2", "score3", variables and sssign them values (0-100)
2. calculate total score and average score, and assign them to the variables.
3. log total score and average score
*/

let score1 = 8;
let score2 = 4;
let score3 = 12;

let totalScore = score1 + score2 + score3;
let averageScore = totalScore / 3;

// console.log(totalScore);
// console.log(averageScore);

/*
4. create "plates" variable and assign 20
5. create "people" variable and assign 7 
6. calculate remaining plates and assign to the variable
7. add one to remaining plates
8. create message varible and display 'There are (your value goes here) plates available' - string concatenation
9. Log message
*/

let plates = 20;
let people = 7;
let remainingPlates = plates % people;
// console.log(remainingPlates);
remainingPlates++;
let message = "There are" + " " + remainingPlates + " " + "plates available";
console.log(message);
