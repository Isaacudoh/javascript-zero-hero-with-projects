// allows select dynamic elements
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up --- default
// event capturing - fires at the root and fires until reaches target

let container = document.querySelector(".container");
let list = document.querySelector(".list");

function showBubbling(e) {
  console.log("current target", e.currentTarget);
  console.log("target", e.target);
}

list.addEventListener("click", showBubbling);
container.addEventListener("click", showBubbling);
