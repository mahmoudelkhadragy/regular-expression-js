let twitter = '@mahmoudelkhadragy';

// pattern to match twitter
let regEx = /^@\w+$/g;
// more specific pattern
let regEx2 = /^@?(?<mm>\w+)$/g;

console.log(regEx.test(twitter));
console.log(regEx2.exec(twitter));