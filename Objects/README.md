# Objects

## Basics

- js objects defined the according to the javascript object notation. objects have properties and methods.
  These are key-value pairs. objects can have objects inside them. The properties describes the state of the object, and methods are used to change the properties in a consistent user defined manner.

## Object containers

- const object container `const obj = {}`, allows only to change the properties of the container but not assign a new object to it, hence a constant.
- accessing the properties can be done by usual dot notation (`obj.property_name`) or the bracket notation (`obj["property_name"]`). Use of bracket notation can be useful when the property_name is stored in another variable ( `var take = "property_name"` and `obj[take]`). Also, sometimes unconventional property names (mostly coming from fetched json data) pose issue with dot notations, and in such cases the bracket notation comes to the rescue.

## Memory management

- Unlike low-level lang like C/C++ we don't have to worry too about memory managment in js. A garbage collector takes care of that (An optimal garbage collection is undecidable problem, so all these works on heuristics and approximations)

## Classes

- Most of the usual class paradigms work here. Two kinds of notations are used often, `class Name {} ` and `const Name = class {}`. Always advisable to keep classes in modules and explicitly export them, and then import them when needed. Objects are created by `const obj = new Name (...args)`
- Object templates can be created both by Classes and Object Constructor functions. The latter provides less functionalities but is supported widely.

- Refer to Standard built-in object for global objects. [MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
