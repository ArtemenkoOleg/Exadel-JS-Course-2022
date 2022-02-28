function pinCodeGenerator(length){
    const min = 10 ** (length - 1); // e.g. at length = 5, min = 10000 (10^ [5-1])
    const max = (10 ** length) - 1; // e.g. at length = 5, max = 99999 (10^5 - 1)
    return Math.trunc(Math.random() * (max - min) + min); //return numbers in the given range (between min and max)
}
console.log (pinCodeGenerator (5))
