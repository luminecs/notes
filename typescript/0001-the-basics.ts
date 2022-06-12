/**
 * The goal of TypeScript is to be a static typechecker for JavaScript
 * programs - in other words, a tool that runs before your code runs
 * (static) and ensures that the types of the program are correct
 * (typechecked).
 */
/**
 * tsc **.ts => **.js
 */
console.info('Hello World!')

function greet(person, date) {
    console.info(`Hello ${person}, today is ${date}`)
}
greet('Brendan', '2020')
