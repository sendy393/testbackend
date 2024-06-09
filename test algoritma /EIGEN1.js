function reverseStringKeepNumber(str) {
    let alphabets = str.slice(0, -1);
    let number = str.slice(-1);
    let reversedAlphabets = alphabets.split('').reverse().join('');
    return reversedAlphabets + number;
}

const inputString = "NEGIE1";
console.log(reverseStringKeepNumber(inputString)); 
