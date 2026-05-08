function findPrimeNum(n) {

    let isPrime = true;

    if (n === 2) {
        return true
    }
    if (n === 1) {
        return false
    }

    for (let i = 2; i <= n - 1; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(findPrimeNum(2))
console.log(findPrimeNum(1))
console.log(findPrimeNum(4))
console.log(findPrimeNum(5))
console.log(findPrimeNum(6))
console.log(findPrimeNum(7))


// method 2 optimized code 


function checkprime(n) {

    let isPrime = true;
    if (n > 0) {

        if (n == 2) {
            return true
        }

        if (n == 1) {
            return false
        }

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false
            }
        }
    }
    else {
        console.log("Enter  a positive number")
    }

    return true
}

console.log("1 = " + checkprime(1))
console.log("2 = " + checkprime(2))
console.log("9 = " + checkprime(9))
console.log("11 = " + checkprime(11))
console.log("25 = " + checkprime(25))

