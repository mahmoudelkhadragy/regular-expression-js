
/* // wildcard character is => .
    1- matching any single character except new line

    The dotAll Flag
    2- in ECMAScript release 2018 a new flag was added to regular expressions in JavaScript. The new flag is the letter s and it called the dotAll Flag. This flag can be added to your regular expression if you would like the wildcard character to match all characters
*/
/*
const regex = /h.t/g;
const str = 'how it that so hot?';

const test = str.match(regex);

console.log(test);

*/

// example of using capturing group to take name and age
const text = "John Smith (age 35)";
const pattern = /([A-Za-z ]+) \(age (\d+)\)/;
const match = text.match(pattern);
console.log(match);
if (match !== null) {
  const name = match[1];
  const age = match[2];
  console.log(`Name: ${name}, Age: ${age}`);
} else {
  console.log("No match found");
}