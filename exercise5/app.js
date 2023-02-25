/*
make regular expression pattern to validate passwords. It checks if the password meets the following requirements:

Has at least 8 characters.
Contains at least one uppercase letter.
Contains at least one lowercase letter.
Contains at least one digit.

*/

const password = "Abc12345";
const pattern = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g;
const isPasswordValid = pattern.test(password);

console.log(isPasswordValid); // Output: true

/*

(?=.{8,}): Positive lookahead assertion to check if the string has at least 8 characters. 
(?=.*[A-Z]): Positive lookahead assertion to check if the string contains at least one uppercase letter. 
(?=.*[a-z]): Positive lookahead assertion to check if the string contains at least one lowercase letter.
(?=.*[0-9]): Positive lookahead assertion to check if the string contains at least one digit.

*/