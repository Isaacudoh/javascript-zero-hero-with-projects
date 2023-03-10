// select the element or group of elements that we want
// decide the effect we want to apply to the selection

// querySelector('any css'); - selects single
// querySelectorAll('any css') - selects all

let result = document.querySelector("#result");
result.style.backgroundColor = "blue";

let item = document.querySelector(".special");
// console.log(item);

let lastItem = document.querySelector("li:last-child");
// console.log(lastItem);

let list = document.querySelectorAll(".special");
console.log(list);

list.forEach(function (item) {
  console.log(item);
  item.style.color = "yellow";
});
