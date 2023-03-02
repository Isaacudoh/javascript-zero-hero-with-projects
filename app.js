// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

let people = [
  { name: "nsikak", age: 31, position: "developer", id: 1, salary: 200 },
  { name: "Peter", age: 25, position: "designer", id: 2, salary: 300 },
  { name: "Susy", age: 11, position: "boss", id: 3, salary: 500 },
  { name: "anna", age: 35, position: "the boss", id: 4, salary: 500 },
];

let total = people.reduce(function (acc, currItem) {
  console.log(`total ${acc}`);
  console.log(`current money : ${currItem.salary}`);
  acc += currItem.salary;
  return acc;
}, 0);

console.log(total);
