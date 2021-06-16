/* Variables */
// var is in global scope
var x = 3,
  y = 5;

function change_val() {
  // let keeps x in the local scope of the function
  let x = 4;
  y = 6; // notice that y doesn't have let
  console.log(x, y);
}
console.log(x, y);
change_val();
console.log(x, y); // finally x doesn't change

// remember that, if at certain point js crashes, remaining
// instructions do not take place and the js just stalls

/* Arrays : list-like objects*/
// js doesn't care about type of data in an array (but there does exists typed-arrays)
const ar = [1, 2, 32.43, true, "glory"];
console.log(ar);
console.log(ar.length); // similar to size

/* link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array */
console.log(ar.join()); // comma seperated
console.log(ar.join("/")); // forw-slash seperated
ar.push("is", 2, 3.4); // similar to emplace_back
ar.shift(); // similar pop_front(), 1 is lost
console.log(ar);
ar.unshift(1); // push_front(), 1 is put in front again
console.log(ar);
ar.pop(); // similar to pop_back()

ar.forEach(function (item) {
  // item here is NOT accessed by ref, but a copy
  // So doesn't change the actual contents of the ar
  item = `<li>${item}</li>`;
  console.log(item);
});
console.log(ar); // ar isn't changed

/* Practice challenges :P */
// Move the last element to first
ar.unshift(ar.pop());
console.log(ar);
// sort the array
ar.sort();
console.log(ar);

// use slice to create a shallow copy,
// i.e. references are stored to the objects of the original array
