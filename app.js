// select element
// addEventListener()
// what event, what to do

let btn = document.querySelector(".btn");
let heading = document.querySelector("h2");

function changeColors() {
  console.log("hello");
}

btn.addEventListener("click", changeColors);

