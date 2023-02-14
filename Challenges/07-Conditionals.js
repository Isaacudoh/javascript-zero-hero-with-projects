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
  age: 15,
  status: 'resident',
};

let person2 = {
    name: 'john',
    age: 25,
    status: 'tourist'
}

if(person1.age >= 18 && person1.status === resident){
    console.log("You are over 18 and is a resident")
}
else {
    console.log('dont be a brat')
}

if (person2.age > 18 && status === person2.resident) {
  console.log("You are over 18 and is a resident");
} else {
  console.log("dont be a brat");
}


