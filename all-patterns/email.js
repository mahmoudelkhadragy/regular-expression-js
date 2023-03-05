let email = 'mm@l.l.com';

// pattern to match emails simple 
let regEx = /.+@.+\..+/g;
// more specific pattern
let regEx2 = /^[^\s@]+@[^\s@.]+\.[^\s@.]+$/g;

console.log(regEx.test(email));
console.log(regEx2.test(email));