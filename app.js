// select element
// addEventListener()
// what event, what to do

let btn = document.querySelector(".btn");
let heading = document.querySelector("h2");

btn.addEventListener("click", function () {
  heading.classList.add("red");
});
