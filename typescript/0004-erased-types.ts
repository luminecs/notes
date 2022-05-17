/**
 * tsc **explicit-types.ts
 * 编译之后，类型被擦除，并且`template string` => "string"
 * 因为浏览器并不能运行typescript（静态类型检查），所以需要tsc把ts编译为js。
 * Type annotations never change the runtime behavior of your program.
 */