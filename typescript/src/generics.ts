/* generics - just like c++ templates */

/* This function essentially returns a object that has value of
type which depends on the parameter x */
// function f(x) { // Should not compile with "NoImplicitAny" = true
//    return {
//       value: x,
//    };
// }

/* Similarly we have in interfaces */

interface TypeFunction<T> {
   (val: T): boolean;
}

const isString: TypeFunction<string> = val => typeof val === 'string'

/* Constraints on type paramters */
function arrayToDict<T extends { id: string }>(ar: T[]): { [_: string]: T } {
   const out: { [_: string]: T } = {};
   ar.forEach(val => {
      out[val.id] = val; // adding a property with id whose value is val
      /* Remember that we have to make sure since we are accessing id in val
      the val should definitely have 'id' as property, and this is enforced 
      by extending { id: string}, so val can be anything but should definitely 
      have val.id defined with string
      */

   });
   return out;
}

const x: { id: string, pid: string } = { id: "hello", pid: "world" };
const y: { id: string } = { id: "bye_world" };

// arr: [{id: string, pid: string}, {id: string}]
// or 
// arr : {id: string} []
const arr = [x, y];

const z = arrayToDict(arr);

/* type parameters are scoped as well, just like function parameters */

// startTuple: (x: T) => ((y: U) => ([x, y] : [T, U])
function startTuple<T>(x: T) {
   return function endTuple<U>(y: U) {
      return [x, y] as [T, U];
   }
}

// t : [string, number]
const t = startTuple("Hello")(23);

/* NOTE: Do not overuse generics */

