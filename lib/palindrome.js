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

    if (strLower.length <= 1) {
        return false
    }

    console.log(newStr.length);
    for (let i = newStr.length - 1; i >= 0; i--) {
        revStr += newStr[i];
    }

    if (newStr === revStr) {
        return true;
    }

    return false;


    // if (strLower === "radar") {
    //     return true;
    // }
    // if(strLower === "level"){
    //     return true;
    // }
}

isPalindrome("A man, a plan, a canal: Panama")

module.exports = isPalindrome;