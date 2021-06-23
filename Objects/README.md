# Objects

## Basics

- js objects defined the according to the javascript object notation. objects have properties and methods.
  These are key-value pairs. objects can have objects inside them. The properties describes the state of the object, and methods are used to change the properties in a consistent user defined manner.

## Object containers

- const object container `const obj = {}`, allows only to change the properties of the container but not assign a new object to it, hence a constant.
- accessing the properties can be done by usual dot notation (`obj.property_name`) or the bracket notation (`obj["property_name"]`). Use of bracket notation can be useful when the property_name is stored in another variable ( `var take = "property_name"` and `obj[take]`). Also, sometimes unconventional property names (mostly coming from fetched json data) pose issue with dot notations, and in such cases the bracket notation comes to the rescue.

## Memory management

- Unlike low-level lang like C/C++ we don't have to worry too about memory managment in js. A garbage collector takes care of that (An optimal garbage collection is undecidable problem, so all these works on heuristics and approximations)
- refer [MDN Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)

## Classes

- Most of the usual class paradigms work here. Two kinds of notations are used often, `class Name {} ` and `const Name = class {}`. Always advisable to keep classes in modules and explicitly export them, and then import them when needed. Objects are created by `const obj = new Name (...args)`
- Object templates can be created both by Classes and Object Constructor functions. The latter provides less functionalities but is supported widely.

- Refer to Standard built-in object for global objects. [MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

## Objects from O'Reilly

- Every object has a prototype except Object.prototype. Objects inherit properties from its prototype.
- Unless we specifically create null objects using `Object.create`, objects inherit properties from Object.prototype (and not Object.\*).

## Enumeration order of objects

- All these are about using Object.keys() ...
- To make the arrays work, since their properties are non-negative integers,
  first all properties with non-negative integers are enumerated in the increasing order.
- After that all properties which aren't symbols, in the order of insertion
- Then symbols, in the order of insertion
- When enumeration takes place on the inherited properties from the prototype (yes enumeration goes up the prototype chain), the ones which were overwritten and were enumerated already will not be shown.

## Accessing objects

- [Accessing objects](https://stackoverflow.com/questions/6586670/how-does-javascript-vm-implements-object-property-access-is-it-hashtable/62064106#62064106)

## Understanding `this` object

- The current scope is the execution context, and js runtime maintains a stack of these execution contexts. For more, refer `./this.js`

- refer [this - betterprogramming.pub](https://betterprogramming.pub/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8)

## Using prototype and constructor properties smartly

- Everything is so dynamic, it just blows my mind So we know that the constructor function is stored in the .constructor What if, after creating an object from the constructor function, we use that object to refer back to the constructor function and add certain properties or methods to it?
  Guess what! Since we have access to the constructor from the objects and hence the properties of the constructor, we do have access over the newly added property from all of the object instances (something like a dynamic update).

- refer [Prototype optimising memory usage](https://blog.yonatan.dev/prototype-optimizing-memory-usage/),
  [Prototype operator performance saves memory](https://stackoverflow.com/questions/3493252/javascript-prototype-operator-performance-saves-memory-but-is-it-faster)

-
