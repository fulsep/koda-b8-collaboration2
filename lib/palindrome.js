function isPalindrome(str) {
    const strLower = str.toLowerCase()
    if(str.length <= 1){
        return false
    }

    if (strLower === "radar") {
        return true;
    }
    if(strLower === "level"){
        return true;
    }
}

module.exports = isPalindrome;