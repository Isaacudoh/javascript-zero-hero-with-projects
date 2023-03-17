// JSON.stringify(), JSON.parse ()

let friends = ["john", "peter", "bob"];

localStorage.setItem("friends", JSON.stringify(friends));

let values = JSON.parse(localStorage.getItem("friends"));
console.log(values[2]);

let fruits;
if (localStorage.getItem("fruit")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}

console.log(fruits);
// fruits.push("apple");
fruits.push("orange");
localStorage.setItem("fruits", JSON.stringify(fruits));
