/*

## Strings #8

1. create function fullName
2. accept two paramaters "firstName", "lastName"
3. add them together (concat) and return result in uppercase
4. invoke fullName and pass some values
5. log result
6. change the order of arguments
7. refactor to object parameter

*/

function fullName(firstName, lastName) {
  //   let firstName = "nsikak";
  //   let lastName = "udoh";
  let fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}

console.log(fullName("john", "smith"));
