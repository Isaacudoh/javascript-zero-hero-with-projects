// JSON.stringify(), JSON.parse ()

let friends = ["john", "peter", "bob"];

localStorage.setItem("friends", JSON.stringify(friends));

let values = JSON.parse(localStorage.getItem("friends"));
console.log(values[2]);
