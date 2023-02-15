// Array Properties and Methods

let names = ["john", "bobo", "barry", "olga", "ben"];

// length
console.log(names.length);
console.log(names[names.length - 1]);

// concat
let lastNames = ["pepper", "onion", "banana"];
let allNames = names.concat(lastNames);
console.log(allNames);

// reserve
console.log(allNames.reverse());

// unshift - adds to beginning of array
allNames.unshift("susy");
console.log(allNames);

// shift - remove item from begining of array
allNames.shift();
console.log(allNames);

// push - add to end of array
allNames.push("susy");
console.log(allNames);

// pop -
allNames.pop();
console.log(allNames);
