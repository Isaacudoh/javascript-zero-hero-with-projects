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

// heading.addEventListener("click", sayHello);

// to create h1 dynamically on button click
btn.addEventListener("click", function () {
  let element = document.createElement("h1"); // creates h1 & stores it in element var
  element.classList.add("heading"); // add a class name of heading to each element
  element.textContent = `I'm inside the container`; // the text in the heading
  container.appendChild(element); // adds the new h1 to end of a node
});
