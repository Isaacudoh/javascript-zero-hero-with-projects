// find
// return an object
// returns first match, if no match undefined
// great for getting unique value

let people = [
  { name: "nsikak", age: 31, position: "developer", id: 1 },
  { name: "Peter", age: 25, position: "designer", id: 2 },
  { name: "Susy", age: 11, position: "boss", id: 3 },
  { name: "anna", age: 35, position: "the boss", id: 4 },
];

let names = ["bob", "peter", "susy"];
console.log(
  names.find(function (name) {
    return name === "bob";
  })
);

let person = people.find(function (person) {
  return person.id === 3;
});

console.log(person.name);

let person2 = people.filter(function (person) {
  return person.id === 3;
});

console.log(person2[0].name);
