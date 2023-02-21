/*
The content.js file contains a string of text stored in a variable text1. This string of text is a statement that contains a day of the week as a part of the statement. Write a regular expression that will match any day of the week and then replace that day of the week in the string with Monday. Display the results to the console. 
*/
let text1 = 'Each and every Tuesday, at the beginning of the day, we hold a staff meeting. At the Tuesday staff meeting, you will need to make a report on the past weeks progress, and you will receive assignments for the following Tuesday. Just be aware that somedays this Tuesday meeting might not occur. When that happens, we will make an announcement.';

let reg1 = /\b[mtwfs][a-z]{1,4}[nisr]day\b/gi; // that solution is not accurate

let reg2 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)$/ig;

let newText = text1.replace(reg1, "Monday");

console.log(newText);