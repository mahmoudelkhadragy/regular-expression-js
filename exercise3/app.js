/*
Validate phone numbers entered into the text field. As the number is entered, check to see if it matches these formats: (nnn)-nnn-nnnn, nnn.nnn.nnnn, nnn-nnn-nnnn, nnnnnnnnnn, (nnn)nnn-nnnn. If the number matches, change the text color from red to green.

Use several different phone numbers to test.

HINT: You can use the keyup event to respond to entered text. There is a CSS Class for red and green.
*/

let phoneNums = ["(801)-766-9754", "8015455454", "435.666.1212", "801 796 8010", "435-555-980194", "(801-009-0909", "435-222+8013", "801-777-66553", "801-777-665-", "(801)77A-6655", "801-778-665"];

let regEx = /\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}$/g;

let newArray = phoneNums.filter(elem => elem.match(regEx));

console.log(newArray);