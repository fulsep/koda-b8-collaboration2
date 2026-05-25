/**
* Checks whether a given string is a palindrome.
* A palindrome is a word, phrase, or sequence that reads the same backward as forward 
* (case-insensitive and ignoring punctuation/spaces).
* 
* @param {string} str input an string to be checked
* @returns {boolean} True if the string is a palindrome, false otherwise.
*/


function isPalindrome(str) {
  if (typeof str !== "string") {
    return false;
  }
  const strLower = str.trim().toLowerCase();

  const strArray = strLower.split("").filter((char) => {
    return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
  })
  const newStr = strArray.join();
  
  if (newStr.length <= 1) {
    return false;
  }
  
  const revStr = strArray.toReversed().join();

  return newStr === revStr;
}

module.exports = isPalindrome;
