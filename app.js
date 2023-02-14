// Arrays, Functions and Objects
// Objects - Key/Value pairs method - objects are collections of properties (or keys) which has values in the object. If the value has function then its called a method
// dot notation

// creating objects in Javascript
let person = {
  name: "john",
  lastName: "peters",
  age: 40,
  education: false,
  married: true,
  siblings: ["anna", "susan", "peter"],
  greeting: function () {
    console.log("hello my name is John");
  },
};

console.log(person.lastName);
console.log(person.siblings[1]);
person.greeting();
