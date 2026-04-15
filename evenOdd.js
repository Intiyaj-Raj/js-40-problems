
// /*
//         firast method
// */


// let a = undefined; //invalid value
// let a = NaN   //invalid value
// let a = "true" // even
// let a = "false" // odd
let a = 1.2

console.log("value of a = " + a)
if (a % 2 == 0) {
    console.log("even")
}
else if (a % 2 == 1) {
    console.log("odd")
}
else {
    console.log("please enter a valid number")
}


/*
        second method
*/


let b = 1.2;

if (!Number.isInteger(b)) {
    console.log("please enter an integer number");
}
else if (b % 2 === 0) {
    console.log("even");
}
else {
    console.log("odd");
}

b = 4.223;
let c = parseInt(b)
if (c % 2 == 0) {
    console.log(c + " is even")
}
else {
    console.log(c + "is odd")
}


/* 
        Method 4

*/

function checkEvenOdd(n1) {
    return n1 % 2 == 0 ? "even" : "odd"
}

console.log(checkEvenOdd(5))
console.log(checkEvenOdd(532))
console.log(checkEvenOdd(44))
console.log(checkEvenOdd(45))
console.log(checkEvenOdd(-4))