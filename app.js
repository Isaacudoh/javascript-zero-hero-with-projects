/*

The DOMContentLoaded event fires when the initial HTML document has bee completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading

window.addEventListener('DOMContentLoaded', function(){
  // your code goes here
})

document.addEventListener....

*/

let heading = document.querySelector("h1");

window.addEventListener("DOMContentLoaded", function () {
  console.log(heading);
  heading.style.color = "blue";
});
