# The primitives: stirng, number, and boolean

# Arrays

string[]

number[] = Array<number>

`T<U>`

> Note that [number] is a different thing; refer to the section on Tuples.

# any

```typescript
let obj: any = { x: 0};
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```

# noImplicitAny

When you don't specify a type, and TypeScript can't infer it from context,
the compiler will typically default to `any`.

`any` isn't type-checked. Use the compiler flag `noImplicitAny` to flag
any implicit `any` as an error.


