// select the element or group of elements that we want
// decide the effect we want to apply to the selection

// getElementsByTagName('tagname);
//HTMLCollection = array-like object
// index, length propery but not array methods (forEach)

//querySelectorAll() in most cases
// Nodelist - objects are collections of nodes
// can run forEach
// turn  them into array - spread operator [...]
//after that can use any array properties

let headings = document.getElementsByTagName("h2");
headings[0].style.color = "red";
console.log(headings);

let items = document.getElementsByTagName("li");


let betterItems = [...items]
betterItems.forEach
