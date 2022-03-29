 stringLength = (string) => {
     const len = string.length;
     if (len > 1 && len <= 10) {
         return len;
     }
     else {
         throw new Error('string is greater than 10 characters');
     }
    
}

reverseString = (string) => {
    const strArray = [...string]
    reverseArr = strArray.reverse();
    reverseStr = reverseArr.join('');
    return reverseStr;
}

capitalize = (string) => {
    const strArray = [...string]
    strArray[0] = strArray[0].toUpperCase();
    return strArray.join('');
}

module.exports = { stringLength, reverseString, capitalize }; 