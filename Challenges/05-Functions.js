/*
## Functions #5

1. Create "calculateTotal" function
2. add two parameters subtotal, tax
3. return sum of parameters

4. creat 3 vars "order1", "order2", "order3"
5. Call calculate Result, pass in some values and assign result to each otder
6. log all three orders
7. refactor "calculateTotal" function expression
*/

function calculateTotal(subtotal, tax) {
  // let total = subtotal + tax;
  // return total;
  return subtotal + tax;
}
// console.log(calculateTotal(40, 20));

let order1 = calculateTotal(100, 10);
let order2 = calculateTotal(50, 5);
let order3 = calculateTotal(25, 5);

console.log(order1, order2, order3);
