// storing values of array into multiple variables
// example:  ====>

let names = ["Intiyaj", "Raj", "John", "Raish", "Rahul"];

// accessing value

// let winner = names[0];
// let runnerUp = names[1];
// let secondRunnerUp = names[2];

// access value using destructure

let [winner, runnerUp, secondRunnerUp] = names;

console.log(winner);
console.log(runnerUp);
console.log(secondRunnerUp);

// Destructuring with object

const student = {
  name: "Intiyaj",
  age: 12,
  class: 9,
  subject: ["hindi", "english", "math", "science"],
  password: "a@312",
  username: "inti_0786",
};

let { username, password } = student;

console.log(username);
console.log(password);

// assigning value in new varible through destructuring

let { username: user, password: secretKey } = student;

console.log(user);
console.log(secretKey);
