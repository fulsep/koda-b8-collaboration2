const isPalindrome = require("./lib/palindrome.js");

const string = "Live on time, emit no evil"
const result = isPalindrome(string);

console.log(`The string "${string}" is ${!result ? "NOT " : ""}a palindrome.`)
