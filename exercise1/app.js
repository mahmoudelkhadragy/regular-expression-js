/*
    Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)
*/
/*
    caret (^) symbol at the beginning of the regular expression pattern.
    To match a pattern only if it is the first in the text using regular expressions.
*/
let phoneNums = ["801-766-9754", "801-545-5454", "545-801-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-6655"];

let newPhoneArr = phoneNums.filter(num => /^801/.test(num));
console.log(newPhoneArr);
