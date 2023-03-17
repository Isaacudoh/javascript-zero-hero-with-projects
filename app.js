/*
setTimeout - runs function once after specific time
- pass function reference
- duration in ms (1000 ms = 1 second)
- default 0, will cover more extensively in async/await section
- returns unique identifier
- clearTimeout to cancel
- on window object
*/

function sayHello() {
  console.log("hello john");
}
// setTimeout(sayHello, 1000);

// alternative approach - ES6 arrow functions
// setTimeout(function () {
//   console.log("hello john");
// }, 6000);

// pass arguments
function showScore(name, score) {
  console.log(`hello ${name}, your score is ${score}`);
}
// setTimeout(showScore,1000,'john',34)

