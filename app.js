// Web storage API - Provided by browser
// session storage, local storage - provided by broswer
// Method names - setItem, getItem, removeItem, clear
// local storage uses
// Session storage - processes data between sessions (while browser is active)

// localStorage.setItem("name", "john");
// sessionStorage.setItem("name", "john");

localStorage.setItem("name", "nsikak");
localStorage.setItem("friend", "john");
localStorage.setItem("job", "developer");
localStorage.setItem("address", "814 N Magnolia stree");

let friend = localStorage.getItem("friend");
console.log(friend);
localStorage.removeItem("name");
localStorage.clear();
