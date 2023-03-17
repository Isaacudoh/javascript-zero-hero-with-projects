// JSON.stringify(),JSON.parse ()

let friends = ["john", "peter", "bob"];

localStorage.setItem("friends", friends);

let values = localStorage.getItem("friends");
console.log(values[0]);
