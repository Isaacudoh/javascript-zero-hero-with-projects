// event object argument e,evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behavior

let heading = document.querySelector("h1");
let btn = document.querySelector(".btn");
let link = document.getElementById("link");

heading.addEventListener("click", function (event) {
  console.log(event.currentTarget);
});

btn.addEventListener("click", function (e) {
  e.currentTarget.classList.add("blue");
  console.log(e.type);
});

function someFunc(e) {
  e.preventDefault();
}

link.addEventListener("click", someFunc);
