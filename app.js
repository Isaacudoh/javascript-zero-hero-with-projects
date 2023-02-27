function morning(name) {
  return `Goodmorning ${name.toUpperCase()}`;
}
function afternoon(name) {
  return `Good afternoon ${name.repeat(3)}`;
}
function greet(name, callBack) {
  let myName = "Nsikak";
  console.log(`${callBack(name)}, my name is ${myName}`);
}

greet("john", morning);
greet("bobo", morning);

// callback functions, higher order functions, functions as first class objects/citizens

// Functions are first class objects - stored in a variable (expression), pass as an argument to another function, return from the function (closure)

// Higher order function - accepts another functon as an argument or returns another function as a result

// callback function - passed to a another function as an argument and executed in that functoon
