function clacFact(num) {

    let fact = 1;
    if (num >= 0 && typeof num === "number") {

        let newNum = Math.round(num)
        for (let i = 1; i <= newNum; i++) {
            fact *= i
        }

        console.log("factorial of " + newNum + " = " + fact)
    }
    else {
        console.log("only positive number is allowed")
    }

}


// find factorial using recursion 


function usignRecursion(n) {

    if (n === 0 || n === 1) {
        return 1
    }

    return n * usignRecursion(n - 1);
}


clacFact(5)
clacFact(1)
clacFact(0)

//  ye condition hamare code logic ko break kar raha hai
// clacFact(-12)
// clacFact(1.5)
// clacFact(5.3)
// clacFact(5.7)
// clacFact("a")
// clacFact(true)


console.log("5! = " + usignRecursion(5))
console.log("3! = " + usignRecursion(3))
console.log("4! = " + usignRecursion(4))