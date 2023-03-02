// filter
// does return a new array
// can manipulate the size of new array
// returns based on condition

let people = [
  { name: "nsikak", age: 31, position: "developer" },
  { name: "Peter", age: 25, position: "designer" },
  { name: "Susy", age: 11, position: "boss" },
  { name: "anna", age: 35, position: "the boss" },
];

let youngPeople = people.filter(function (person) {
  return person.age <= 25;
});

let developer = people.filter(function (person) {
  return person.position === "developer";
});

console.log(developer);
