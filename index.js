const isPalindrom = require('./lib/palindrome.js')

function main(){
  const result = [
    isPalindrom(1234),
    isPalindrom('nababan'),
    isPalindrom('katak'),
    isPalindrom('rumah'),
    isPalindrom(null)
  ];
  return result
}

console.log(main())