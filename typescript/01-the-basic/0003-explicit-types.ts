/**
 * add type annotations
 */
function greetTS(person: string, date: Date) {
    console.info(`Hello ${person}, today is ${date.toDateString()}!`)
}
// greetTS('Maddison', Date())
greetTS('Maddison', new Date())

// we do not always have to write explicit type annotations. typescript can infer the types.
let msg = "hello there";
// let msg: string
// It's best not to add annotations when the type system would end up inferring the same 
// type anyway.
