# Why is closure so important to use?

- Closures are important because they control what is and isn’t in scope in a particular function, along with which variables are shared between sibling functions in the same containing scope. Understanding how variables and functions relate to each other is critical to understanding what’s going on in your code, in both functional and object oriented programming styles.

# Closesure

Closures are functions that refer to separate free variables. In other words, the function defined in the closure will remember the environment in which it was created.
closure can contain any local variable or all local variables declared inside outer wrapper functions.
data hiding ensures exclusive data access for class members and protects object integrity by preventing unintended or intended changes.

# data hiding

data hiding ensures exclusive data access for class members and protects object integrity by preventing unintended or intended changes.

# The coding convention and encapsulation theory to write a code that is easy to debug

- Adding comments to my code,
  we should comment on issues that may be difficult for developers to understand
- Self-Documentation
  Set variable name suggestions, easy for both programmers and readers
  the reader can easily deduce what the purpose of the variable is
- Documentation
  Writing document information about how the logic in the program works

# How to optimize functions and modules

- Function
  Reuse method.
  Set variable name
- Module
  Reuse function.
  division of modules with distinct features related to each other

# mandatory conventions for writing "clean code"

1. Magic numbers

`// Bad practice
   for (let i = 0; i < 60; i++) {
   // do something
   }
`
`
// Good practice
const MINUTES_OF_THE_HOUR = 60;
for (let i = 0; i < MINUTES_OF_THE_HOUR; i++) {
// do something
}
`
2. Avoid using multiple nested loops 
3. regardless of comments 
4. Writing function is too long should be divided into several parts
  `
// Bad practice
const addSub = (a, b) => {
// add
const addition = a + b;

`
// sub
const sub = a - b;

// returning as a string
return `${addition}${sub}`;
};

// Good practice
// add
const add = (a, b) => {
return a + b;
};

// sub
const sub = (a, b) => {
return a - b;
};
`

5. Avoid repeating code
6. get variable name by camelCase
7. Meaningful naming
8. Prefer a detailed description rather than a brief
`
 // Bad practice
   const findUser

// Good practice
// descriptive version
const findUserByPhoneOrEmail

// shorter version
const getUserFromDatabase
`

9. Use consistent verbs for each concept

`
   // Bad practice
   function getUserEmail() {
   // do something
   }
   function retrieveUserPhone() {
   // do something
   }

// Good practice
function getUserEmail() {
// do something
}
function getUserPhone() {
// do something
}
`

10. Make Boolean variable names more specific in if-then statements

`
    // Bad practice
    let car = {};
    car.sedan, car.sold, car.green, car.airbag;

// Good practice
let car = {};
car.isSedan, car.isSold, car.isGreen, car.hasAirbag; 
`
11. Use nouns when naming classes and apply Pascal Case's rule
`
class SecretProject {
// do something
} 
`
12. Capitalize constant values
`const DAYS_IN_A_YEAR = 365;` 13. avoid naming variables with a letter

# How much effort would be spent to refactor messed up codes and can explain why we should try to make our codes readable at the start

Having to build code is time-consuming and expensive.
After a long time with errors, we can easily read and correct the code in the previous steps easily.
