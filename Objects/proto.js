/* prototypes and __proto__ */

var t = { a: 3, b: -2 };
var z = { a: 2, __proto__: t };
var x = { a: 1, __proto__: z };

console.log(t, z, x);
console.log(x.a, x.__proto__.a, x.__proto__.__proto__.a, x.__proto__.b);
console.log(Object.getPrototypeOf(x)); // or simply x.__proto__
