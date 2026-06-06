// 1. What is a Closure?

// A closure is a function that can access variables from its outer function even after the outer function has finished executing.

function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();

console.log(counter());
console.log(counter());

// How do Closures Provide Data Privacy?

function bankAccount() {
  let balance = 1000;

  return {
    getBalance() {
      return balance;
    },
    deposit(amount) {
      balance += amount;
    },
  };
}

const account = bankAccount();

account.deposit(500);
console.log(account.getBalance());
