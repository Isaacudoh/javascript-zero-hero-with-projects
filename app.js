// allows select dynamic elements
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up --- default

let container = document.querySelector(".container");
let btn = document.querySelector(".btn");
let heading = document.querySelector(".heading");

// heading.addEventListener("click", function () {
//   console.log("hello");
// });

// another  way

function sayHello() {
  console.log("Hello there");
}

heading.addEventListener("click", sayHello);
