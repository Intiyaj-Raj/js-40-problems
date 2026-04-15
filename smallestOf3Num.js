
function findSmallest(n1, n2, n3) {

    if (n1 <= n2 && n1 <= n3) {
        return n1;
    }
    else if (n2 <= n1 && n2 <= n3) {
        return n2
    }
    else if (n3 <= n1 && n3 <= n2) {
        return n3
    }
    else if (n1 == n2 == n3) {
        return n1;
    }
}

console.log(findSmallest(3, 1, 6))
console.log(findSmallest(-2, 1, 6))
console.log(findSmallest(-6, -9, 1))
console.log(findSmallest(1, 1, 1))



console.log("")
console.log("Method 2")
console.log("")

// 2nd method 


function findSmallest2(a, b, c) {
    let smallestNum = a;

    if (a < smallestNum) {
        smallestNum = a;
    }
    else if (b < smallestNum) {
        smallestNum = b
    }

    return smallestNum;
}

console.log(findSmallest2(3, 1, 6))
console.log(findSmallest2(-2, 1, 6))
console.log(findSmallest2(-6, -9, 1))
console.log(findSmallest2(1, 1, 1))
