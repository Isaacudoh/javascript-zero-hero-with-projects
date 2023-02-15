/*
String properties and methods - JavaScript methods are actions that can be performed on objects. A JavaScript method is a property containing a function definition.
wrapper string objects, don't memorize methods.
*/

let text = " Peter Jordan";
let result = text.length;
console.log(result);

console.log(text.length);
console.log(text.toLocaleLowerCase()); // Method
console.log(text.toLocaleUpperCase());
console.log(text.charAt(0)); // charater at index 0
console.log(text.charAt(text.length - 1));
console.log(text.indexOf("p"));
console.log(text);
console.log(text.trim());
console.log(text.trim().toLowerCase().startsWith("Peter"));
console.log(text.includes("eter"));
console.log(text.slice(-1));

// let person = {
//   name: "peter", // property
//   greeting() {
//     // method
//     console.log("Hey, I'm Peter");
//   },
// };

// console.log(person);
// console.log(person.name);
// person.greeting();
