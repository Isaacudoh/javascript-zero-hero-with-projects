// Functions, return, if, arrays, for loop

let gas = [20, 40, 100, 30];
let food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

let gasTotal = calculateTotal(gas);
let foodTotal = calculateTotal(food);
