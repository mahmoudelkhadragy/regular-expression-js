let myDate = "22/5/2023";

// simple regex to match valid date formate
let regex = /\d{1,2}\/\d{1,2}\/\d{4}/g;

// more details regex to match dates
let regex2 = /^(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/([0-9]{2})?[0-9]{2}$/g

console.log(regex.test(myDate));