// submit event listener
// prevent default
// how to get a value

let form = document.getElementById("form");
let name = document.getElementById("name");
let password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form submitted");
});
