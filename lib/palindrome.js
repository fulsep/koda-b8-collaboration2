function isPalindrome(str) {
    if (typeof str !== "string") {
        return false
    }
    const strLower = str.trim().toLowerCase()

    let newStr = "";
    let revStr = "";

    for (let i = 0; i < strLower.length; i++) {
        if ((strLower[i] >= 'a' && strLower[i] <= 'z') ||
            (strLower[i] >= '0' && strLower[i] <= '9')) {
            newStr += strLower[i];
        }
    }

    if (newStr.length <= 1) {
        return false
    }

    for (let i = newStr.length - 1; i >= 0; i--) {
        revStr += newStr[i];
    }

    if (newStr === revStr) {
        return true;
    }

    return false;

}

module.exports = isPalindrome;