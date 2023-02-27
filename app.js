function greetMorning(name) {
  let myName = "Nsikak";
  console.log(`Goodmorning ${name}, my name is ${myName}`);
}

function greetAfternoon(name) {
  let myName = "Nsikak";
  console.log(`Goodafternoon ${name}, my name is ${myName}`);
}

greetMorning("john");
greetAfternoon("john");

// callback functions, higher order functions, functions as first class objects/citizens

// Functions are first class objects - stored in a variable (expression), pass as an argument to another function, return from the function (closure)

// Higher order function - accepts another functon as an argument or returns another function as a result

// callback function - passed to a another function as an argument and executed in that functoon
