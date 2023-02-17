// Arrays and for loops

let names = ["anna", "john", "chris", "adam", "nsikak", "paul"];
let lastName = "shakeandbake";
let newArray = [];

// for loop

for (let i = 0; i < names.length; i++) {
  console.log(i);
  console.log(names[i]);
  newArray.push(`${names[i]} ${lastName}`);
}

console.log(names);
console.log(newArray);
