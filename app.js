// select element
// addEventListener()
// what event, what to do

// Example 1: annonymous function setup
let btn = document.querySelector(".btn");
let heading = document.querySelector("h2");

btn.addEventListener("click", function () {
  console.log("i have been clicked");
  heading.classList.add("red");
});

// Example 2: function Reference setup

// let btn = document.querySelector(".btn");
// let heading = document.querySelector("h2");

// function changeColors() {
//   let hasClass = heading.classList.contains("red");
//   if (hasClass) {
//     heading.classList.remove("red");
//   } else {
//     heading.classList.add("red");
//   }
// }

// btn.addEventListener("click", changeColors);
