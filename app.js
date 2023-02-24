// local scope
// can not be accessed from outside code block
// if - not VAR

let name = "nsikak";

function calculate() {
  let name = "john";
  let age = 25;
  console.log(age);
}
// console.log(age);
calculate();

if (true) {
  let name = "john";
}
console.log(`my name is ${name} and i'm awesome`);
