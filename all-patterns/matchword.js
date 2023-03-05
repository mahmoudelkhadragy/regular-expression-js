let html = "lets put several different words together and see what will happen.";

let regex = /\b(?:words\W+(?:\w+\W+){0,5}together)|(?:together\W+(?:\w+\W+){0,5}words)\b/ig;

console.log(regex.test(html));