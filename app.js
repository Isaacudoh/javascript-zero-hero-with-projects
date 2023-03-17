/*

The load event fires when the whole page has been completely loaded, including all dependent resources such as stylesheets and images. This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for stylesheets, images, and subframes to finish loading.

window.addEventListener('load', function(){
  // your code goes here
})

*/

window.addEventListener("load", function () {
  let image = document.querySelector("img");
  console.log(image);
  console.log(image.width);
});
