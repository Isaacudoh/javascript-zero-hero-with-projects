// Date

let months = [
  "january",
  "fabruary",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "november",
  "december",
];

let days = [
  "Sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

let date = new Date();
let month = date.getMonth();
console.log(months[month]);

let day = date.getDay();
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

let sentence = `Today's date is ${days[day]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;
console.log(sentence);
