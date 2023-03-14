// click - fired after full action occues
// mousedown - button is pressed
// mouseup - button is released
// mouseneter - moved onto an element
// mouseleave - moved outof an element

let heading = document.querySelector("h2");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("you clicked me");
});

btn.addEventListener("mousedown", function () {
  console.log("down");
});

btn.addEventListener("mouseup", function () {
  console.log("up");
});

heading.addEventListener("mouseenter", function () {
  heading.classList.add("blue");
});

heading.addEventListener("mouseleave", function () {
  heading.classList.remove("blue");
});
