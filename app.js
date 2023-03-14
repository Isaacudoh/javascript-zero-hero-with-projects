// innerHTML
// textContent

let list = document.getElementById("first");
let div = document.getElementById("second");
let item = document.querySelector(".item");

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

let ul = document.createElement("ul");
ul.innerHTML = `<li class="item">list item</li>
      <li>list item</li><li>list item</li>`;
document.body.appendChild(ul);
