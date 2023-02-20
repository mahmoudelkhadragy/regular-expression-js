// Creating a regular expression
/* 
    1- regular expression literal 
        const regex = /ab+c/;
    2- calling the constructor function of the RegExp object
        const regex = new RegExp('ab+c');

    => usong literal can improve performance.
*/
const regex = /hot/;
const str = 'how it that so hot?';

const test = regex.exec(str);
const test2 = str.match(regex);

console.log(test);
console.log(test2);
