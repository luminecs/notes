/**
 * TypeScript 支持 ECMAScript 版本降级(downleveling)。
 * By default TypeScript targets ES3
 * tsc --target es2015 **.ts
 * `template string` => `template string`，此特性是ES2015引入的，所以编译后是ES2015格式
 * console.log(`Hello ${person}, today is ${date.toDateString()}!`);
 */
