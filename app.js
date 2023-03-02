// map
// does return a new array
// does not change size of original array
// uses values from origin arrary when making new one

let people = [
  { name: "nsikak", age: 31, position: "developer" },
  { name: "Peter", age: 25, position: "designer" },
  { name: "Susy", age: 11, position: "boss" },
  { name: "anna", age: 35, position: "the boss" },
];

let ages = people.map(function (person) {
  return person.age + 20;
});

let newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

let names = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = names.join("");

console.log(names);
