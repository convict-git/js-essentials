# Functions

- `f : (..args) -> ret` function `f` takes `args` as arguments and returns `ret`.
- Multiple ways of defining a function.

```js
// Function declaration
function f(...args) {
  // .. do something with args
  return ret; // not necessary, default return type is "undefined"
}

// Function expression (preferred way)
const f = function (...args) {
  // anonymouse function assigned to f, make sure f is a constant holder
  // .. do something with args
  return ret; // not necessary, default return type is "undefined"
};

// Arrow functions (Widely used)
const f = (...args) => {
  // .. do something with args
  return ret; // not necessary, default return type is "undefined"
};
```

- Function expression way is the preferred way. It is also a good practice to keep assign the anonymous function to a `const` variable so we don't accidentaly overwrite or redefine the original variable.

- Default arguments are allowed. Giving fewer arguments leads to undefined behaviour.

- Functions (and infact `var` variables) can be hoisted to global scope but only limited to declaration (and not initialization)
  but hoisting doesn't work with `=>` functions which enforces good practice.
  refer: [MDN Docs Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

```js
x = "outside";
const obj = {
  label: "object Label",
  x: "inside",
  work: function () {
    console.log(this.x); // scope of 'this' is the object

    (() => {
      console.log(this.x); // again scope of 'this' is the object
    })();

    (function () {
      console.log(this.x); /* this gets hoisted up 
      the scope of 'this' is the global scope */
    })();
  },
};
obj.work();
```

```
output:
inside
inside
outside
```

- Arrow function take the local scope, so using them as method declaration in classes or objects won't make sense, as they will won't be able to capture `this` of the object and instead point to the global scope.

- Callback allows us to execute a function inside other function by passing it as a parameter

- While iterating using `forEach` or `for-of` statement, the `item` are copies and doesn't affect the actual iterable object.
- You cannot iterate over not iterable object (obviously!).

## Module factory

```js
function WorkshopModule(x) {
  var publicAPI = { f };
  return publicAPI;

  // ** some other things

  function f(y) {
    // use x,y and other stuffs
    console.log(x, y);
  }
}

var chip_workshop = WorkshopModule("Chips");
chip_workshop.f("Reload");
```

## Classic/Revealing Module Pattern

```js
var chip_workshop = (function WorkshopModule(x) {
  var publicAPI = { f };
  return publicAPI;

  // ** some other things

  function f(y) {
    // use x,y and other stuff
    console.log(x, y);
  }
})("Chips");

chip_workshop.f("Reload");
```
