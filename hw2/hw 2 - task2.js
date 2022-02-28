function isCharNumber(char) {
  return char >= '0' && char <= '9';
}

function validatePhoneNumber(phoneNumber){
    const phoneNumberNoSpaces = phoneNumber.replace(/ /g,'') //remove spaces before checking
    for (const char of phoneNumberNoSpaces) {
        if (isCharNumber(char) === false) {
            return false
        }
    }
    if (phoneNumberNoSpaces.length === 10){
        return true
    }
    return false
}

console.log(validatePhoneNumber("067 734 4343"))
console.log(validatePhoneNumber("094 643 7432"))
console.log(validatePhoneNumber("083 jfvj 4554"))
console.log(validatePhoneNumber("Anton0938 884"))
console.log(validatePhoneNumber("0437348348"))
console.log(validatePhoneNumber("043734834"))
console.log(validatePhoneNumber(""))