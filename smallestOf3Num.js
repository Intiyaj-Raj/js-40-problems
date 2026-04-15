function findSmallest(n1, n2, n3) {

    let a = Number(n1)
    let b = Number(n2)
    let c = Number(n3)

    if (a <= b && a <= c) {
        return a;
    }
    else if (b <= a && b <= c) {
        return b;
    }
    else {
        return c;
    }
}

console.log(findSmallest(3, 1, 6))
console.log(findSmallest(-2, 1, 6))
console.log(findSmallest(-6, -9, 1))
console.log(findSmallest(1, 1, 1))
console.log(findSmallest(2, 7, 2))
console.log(findSmallest(13, "12", 3))



console.log("")
console.log("Method 2")
console.log("")

// 2nd method 

function findSmallest2(a, b, c) {
    let smallestNum = Number(a);

    if (Number(b) < smallestNum) {
        smallestNum = Number(b);
    }

    if (Number(c) < smallestNum) {
        smallestNum = Number(c);
    }

    return smallestNum;
}

console.log(findSmallest2(3, 1, 6))
console.log(findSmallest2(-2, 1, 6))
console.log(findSmallest2(-6, -9, 1))
console.log(findSmallest2(1, 1, 1))
