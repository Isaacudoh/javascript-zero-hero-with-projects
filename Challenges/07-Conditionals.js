/*

## Conditional statements #7

1. create two objects "person1". "person2"
2. setup name, age (15-25),
    status ('resident', "tourist") keys
3. setup if else, conditional where age must be bigger than 18 and status must be equal to "resident"
4. test with both objects
 */

let person1 = {
  name: "nsikak",
  age: 56,
  status: "resident",
};

let person2 = {
  name: "john",
  age: 15,
  status: "tourist",
};

if (person1.age >= 18 && person1.status === "resident") {
  console.log("You can vote because you are over 18 & is a resident");
} else {
  console.log("dont be a brat");
}

if (person2.age < 18 || person2.status !== "resident") {
  console.log("You are NOT over 18 or a resident");
} else {
  console.log("You go vote now");
}
