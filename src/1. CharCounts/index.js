const calculateCharsCount1 = (input) => {
    const charCount = {};
    for(const char of input) {
        const charLowerCase = char.toLowerCase();
        charCount[charLowerCase] = charCount[charLowerCase] && ++charCount[charLowerCase] || 1;
    }
    return charCount;
}

/**
 * The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
 * 0==>48, 9==>57
 * a==>97, z==>122
 * @param {*} char 
 * @returns 
 */
const isAlphanumeric = (char) => (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) || (char.charCodeAt() >=97 && char.charCodeAt() <=122);
// only for alphanumeric
const calculateCharsCount2 = (input) => {
    const charCount = {};

    for(const char of input) {
        const charLowerCase = char.toLowerCase();
        if(isAlphanumeric(charLowerCase))
        charCount[charLowerCase] = charCount[charLowerCase] && ++charCount[charLowerCase] || 1;
    }
    return charCount;
}

console.log(calculateCharsCount1("Hello how are you?"));
console.log(calculateCharsCount2("Hello how are you?"));