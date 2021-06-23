/* understanding `this`
The default scope is the global and hence `this` is assigned to 
the global object which is `window` (in case of browsers) and 
`global` in case of nodeJS env
*/
{
  function foo() {
    console.log("in foo(), `this` is:", this); // window
  }
  function foo_strict() {
    // this makes `this` to be undefined
    "use strict";
    // ("use strict";)  // uncomment to see (TODO: DOUBT)
    /* But wait using  with parethesis doesn't make it go undefined, why? */
    console.log("in foo_strict(), `this` is:", this); // undefined
  }

  foo();
  foo_strict();
  console.log(this); // window
}

/* `this` in a new instance 
Gettting a object either from class or object constructor functions using new
should give the object context in `this`

When can “this” refers to an Invoker Object (Parent Object)?
We also have to take care about in which context was a function invoked
 */
{
  function bar() {
    console.log("inside bar, `this` is:", this);
    (() => {
      console.log("IEEF arrow inside bar, `this`", this);
    })();
    (function () {
      /* Function Hoisting */
      console.log("IEEF normal inside bar, `this`", this);
    })();
  }
  function obj_construct(_x, _y) {
    console.log("Object constructor function obe_construct() called");

    this.x = _x;
    this.y = _y;
    this.bar = bar;
    this.foo = function () {
      console.log("Inside obj's foo: `this` is:", this);
    };
  }

  var obj = new obj_construct(1, 2);
  obj.foo();
  obj.bar();
  /* output is worth looking:
this.js:39 Object constructor function obe_construct() called
this.js:45 Inside obj's foo: `this` is: obj_construct {x: 1, y: 2, bar: ƒ, foo: ƒ}
this.js:29 inside bar, `this` is: obj_construct {x: 1, y: 2, bar: ƒ, foo: ƒ}
this.js:31 IEEF arrow inside bar, `this` obj_construct {x: 1, y: 2, bar: ƒ, foo: ƒ}
this.js:35 IEEF normal inside bar, `this` Window {window: Window, self: Window, document: document, name: "", location: Location, …}
*/

  var obj2 = new obj_construct(3, 4);
  obj2.foo();
  // Inside obj's foo: `this` is: obj_construct {x: 3, y: 4, foo: ƒ}

  console.log(obj.foo == obj2.foo); // false, ofc :P

  /*
functions are special kinds of js objects and they do have their properties as well
call, bind, apply are few properties which are methods of function object
We can use call to provide `this` to a function 
*/
  obj.foo.call(obj2); /* Note that though, foo of obj was called, `this` passed 
  to the function was of obj2, hence the (weird looking) output:
  Inside obj's foo: `this` is: obj_construct {x: 3, y: 4, bar: ƒ, foo: ƒ}bar: ƒ bar()foo: ƒ ()x: 3y: 4__proto__: Object
  */
}

/* Callbacks and this
 */
{
  var tmp = { a: 1, b: 2 };
  function bar(_a, _b) {
    console.log("inside bar, `this` is:", this, _a, _b);
  }
  function foo(x, y, callback) {
    console.log("inside foo, `this` is:", this);
    callback(x, y);
  }
  function obj_construct(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.foo = foo(this.x, this.y, function (__x, __y) {
      console.log("inside callback, `this` is:", this);
    });
    this.bar = bar.call(tmp, _x, _y); // tmp's context is passed
  }
  var obj = new obj_construct(2, 3);
  obj.foo;
}

/* How you can terrribly fail at using this in function constructor ! */
{
  let x = [1, 2, 3, 4];

  x.forEach((y) => {
    console.log(y);
  });

  /* Now suppose you want to add each element of a given list in the newly constructed
  object using function constructor */
  function Make(x_list) {
    var myself = this; // use var myself
    this.fields = [];
    x_list.forEach(function (y) {
      // this.fields.push(y);
      /* The above fails! try uncommenting the above line and check */
      /* it's because This function expression doesn't have access to
      the `this` context of object that is going to be created */

      myself.fields.push(y);
      /* now according to closure, function expressions has access to myself, myself 
      stores this, and using this we can access fields */
    });
  }
  let y = new Make(x);
  console.log(y.fields);
}
