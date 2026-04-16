function reverseString(inputString) {
    console.log(inputString)
    let result = ""

    if (typeof inputString !== 'string') {
        console.log("Only Strings are allowed")
    }
    else {
        for (let i = inputString.length - 1; i >= 0; i--) {
            result = result + inputString[i];
        }
    }

    return result

}

console.log(reverseString("int"))
console.log(reverseString("Intiyaj Raj"))
console.log(reverseString("12345"))
console.log(reverseString(234))

