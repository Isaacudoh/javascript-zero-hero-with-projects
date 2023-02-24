// Global scope vs local scope
// any variable outside of the code block {} is said to be in global scope and can be accesssed anywhere in the program
// gotchas: name collisions, modify by mistake

let name = "nsikak";
name = "peter";

function calculate() {
  // some other code...
  console.log(name);
  name = "orange";
  function inner() {
    name = "inner name value";
    console.log(`this is from inner function ${name}`);
  }
  inner();
}

calculate();

if (true) {
  console.log(name);
  name = "pants";
}
console.log(`my name is ${name} and i'm awesome`);
