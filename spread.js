const arr1 = [1, 2, 3];

const arr2 = [...arr1];

console.log(arr2);

// merge array
const arr1 = [1, 2];
const arr2 = [3, 4];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

// add new element
const numbers = [2, 3, 4];

const newNumbers = [1, ...numbers, 5];

console.log(newNumbers);
