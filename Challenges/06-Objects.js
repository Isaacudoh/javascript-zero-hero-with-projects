/*

## objects #6

1. create car object
2. add make, model, year, colors (array), hydrid (boolean) keys
3. add two methods (drive and stop)
4. in the function body setup log with random text
5. log make
6. log first color
7. invoke both methods

*/

let car = {
  make: "Toyota",
  year: 2023,
  colors: ["blue", "purple", "pink", "yellow"],
  hybrid: true,
  drive: function moveCar() {
    console.log("car is moving....");
  },
  stop: function stopCar() {
    console.log("the car has stopped....");
  },
};

console.log(car.make);
console.log(car.colors[0])
car.stop()
car.drive()
