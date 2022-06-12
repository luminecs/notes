/**
 * The goal of TypeScript is to be a static typechecker for JavaScript
 * programs - in other words, a tool that runs before your code runs
 * (static) and ensures that the types of the program are correct
 * (typechecked).
 * 
 * Each and every value in JavaScript has a set of behaviors you can
 * observe from running different operations. A type is the concept of
 * describing which values can be passed to function and which will 
 * crash. JavaScript only truly provides dynamic typing - running the
 * code to see what happens. 
 *
 * The alternative is to use a static type
 * system to make predictions about what code is expected before it
 * runs. Static types systems describe the shapes and behaviors of what our
 * values will be when we run our programs.
 */
/**
 * tsc **.ts => **.js
 */
console.info('Hello World!')

function greet(person, date) {
    console.info(`Hello ${person}, today is ${date}`)
}
greet('Brendan', '2020')
