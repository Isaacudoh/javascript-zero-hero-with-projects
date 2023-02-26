// Variable lookup
// {} - code block

let globalNumber = 5;

function add(num1, num2) {
  let globalNumber = 20;
  let result = num1 + num2 + globalNumber;
  function multiply() {
    let globalNumber = 100;
    let multiplyResult = result * globalNumber;
    console.log(multiplyResult);
  }
  multiply();
  return result;
}

console.log(add(3, 4));
