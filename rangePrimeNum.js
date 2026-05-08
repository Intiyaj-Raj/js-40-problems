function checkprime(n) {
    let isPrime = true;

    if (n == 2) {
        return true
    }
    if (n == 1) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            return false;
        }
    }
    return true
}

function rangeOfPrime(n) {

    for (let i = 2; i <= n; i++) {
        if (checkprime(i)) {
            console.log(i)
        }
    }

}

rangeOfPrime(10);