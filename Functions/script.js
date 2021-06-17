/* Functions */

// Function declaration
function add(x, y) {
  let z = x + y; // local scope
  return z; // returns the object stored in z
}

// Function expression
const sub = function (x, y = 3) {
  let z = x - y;
  return z;
};

// Immediately invoked function expression (just like we do with lambdas in C++)
(() => {
  console.log(sub(12)); // using the default value of the argument y
  const content = `This is a list`;
  const main = document.querySelector("main");
  const new_list_item = document.createElement("li");
  new_list_item.innerHTML = content;
  main.append(new_list_item);
  console.log(main);
  new_list_item.innerHTML = `This is also a list element`;
  main.append(new_list_item);
  console.log(main);
  console.log("This function is envoked without explicitly calling");
})();

// Default arguments sits at last i.e. suffix of the argument list (obviously)

// arrow functions

const inc = (x) => x + 1;
var y = 3;
y = inc(inc(y));
console.log(y);

// remember functions are hoisted to global scope if possible

x = "outside";
const obj = {
  label: "object Label",
  x: "inside",
  work: function () {
    console.log(this.x); // scope of 'this' is the object

    (() => {
      // arrow function, works in local scope
      console.log(this.x); // again scope of 'this' is the object
    })();

    (function () {
      console.log(this.x); /* this gets hoisted up 
      the scope of 'this' is the global scope */
    })();
  },
};
obj.work();

/* We cannot also not use arrow functions to 
 declare work function in obj as arrow function will
 take the local scope 
 */

((x, y) => {
  var x = 4; // Overrides x
  // let x = 4; // This should give syntax error
  z = x / y;
  console.log(z, x, y);
})(3, 2);

/* Callbacks */
const dec = (x) => x - 1;
const g = (x, callback) => {
  let z = callback(x);
  console.log(z);
};
g(1, dec);
g(1, inc);

var msg = "This is a text message that arrived a little late...";
const f = () => {
  console.log(msg);
};
setTimeout(f, 3000);

g(2, dec); // this doesn't wait for the setTimeOut ?

/* Looping through the content */
var arr = [];
for (let x = 1; x <= 10; x++) {
  arr.push(x);
}
console.log(arr);

var y = 0;
for (let idx = 0; idx < arr.length; idx++) {
  y += arr[idx];
}
console.log(y);

for (let x of arr) {
  y += x;
  x += 1; // x is a copy of the element in arr, so shouldn't change the value in arr
}
console.log(y);
console.log(arr);
// we can run a function using each element of arr as well using forEach
arr.forEach((x) => {
  y += x;
  x += 1; // x is a copy of the element in arr, so shouldn't change the value in arr
});
console.log(y);

const obj_new = {
  name: "hello",
  class: "world",
};

/* This cannot be done, obj_new is not iterable 
for (let x of obj_new) {
}
*/

// Map
// const inc = (x) => x + 1; /* declared above hence commenting out */
var inc_arr = arr.map(inc);
console.log("Array after increment", inc_arr);
