/**
 * This function is case-insensitive and ignores spaces, punctuation, and symbols.
 * @param {string} str Check if the paramater is string
 * @returns {boolean} True if the input is a palindrome
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
