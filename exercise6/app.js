/*
Iterate through the data provided. Use a regular expression to store the names in a new array but change the order of the name so first name is listed first and last name is last. 
*/

let data = ["Jensen, Dale", "Smith, Andrea", "Jorgensen, Michael", "Vasefi, Annika", "Lopez, Monica", "Crockett, Steven"];

let reg = /(\w+), (\w+)/;
let reg2 = /(?<last>\w+), (?<first>\w+)/;
let newData = data.map(function(val) {
    let arr = reg.exec(val);
    if (arr !== null) {
        return arr[2] + " " + arr[1];
    } else {
        return null;
    }
});

// solution with named capture group
let newData2 = data.map(function(val) {
    let arr = reg2.exec(val);
    if (arr !== null) {
        return arr.groups.first + " " + arr.groups.last;
    } else {
        return null;
    }
});
console.log(newData);
console.log(newData2);