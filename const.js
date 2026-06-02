/**
 Can a const value be changed in JavaScript?

 yes we can chagne a const value in JavaScript. 
        but
 A const variable cannot be reassigned after it is declared.

 */

// const name = "john";
// name = "michal"; // Error
// console.log(name);

/*  ✅ Object:  & ✅ Array:

    However, if the const variable stores an object or an array, its contents can be modified.


*/

const user = {
  name: "Jon",
};

console.log("before chagne value: " + user.name);
user.name = "junier"; // Allowed

console.log("after chagne value: " + user.name);

// // ✅ Array:/
const arr = [1, 2, 3];
console.log("before modify value");
arr.forEach((e) => {
  console.log(e);
});

arr.push(4); // Allowed
console.log("after modify value");
arr.forEach((e) => {
  console.log(e);
});

/**
  
  final conclusion :-

   So, we can change the value, but we cannot reassign it?

   example Object :- 

               const user = {
                    name: "Imtiaz"
                };
                user = {
                 name: "Ali" 
                 }; // ❌ Error
  
 */
