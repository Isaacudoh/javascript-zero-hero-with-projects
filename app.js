// forEach
//  does not return new array
// iterates over each array and we can decide what we want to do

let people = [
  { name: "nsikak", age: 31, position: "developer" },
  { name: "Peter", age: 25, position: "designer" },
  { name: "Susy", age: 11, position: "boss" },
];

function showPerson(person) {
  console.log(person.position.toUpperCase());
}

people.forEach(showPerson);

// let people2 = [
//   {
//     name: "okon",
//     age: 24,
//     Ethnicity: "Igbo",
//   },
// ];
