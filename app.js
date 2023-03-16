// submit event listener
// prevent default
// how to get a value

let form = document.getElementById("form");
let name = document.getElementById("name");
let password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevents default behavior of reloading on submit
  console.log("form submitted");
  console.log(name.value); // captures the name values of inputs
  console.log(password.value); // captures the password value of inputs
});
