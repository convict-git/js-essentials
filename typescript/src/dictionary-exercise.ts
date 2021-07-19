/* Implement map and reduce for dict type

Dict has some special properties?
- First of all, it's a set of key-value pairs (unique keys)
- all values are of same type
- all keys are of same type
*/

export type Dict<T> = {
   [_: string]: T | undefined;
};

/* map : Dict<T> -> (T -> U) -> Dict<U> */
export function mapDict<T, U>(d: Dict<T>, f: (_: T) => U): Dict<U> {
   const out: Dict<U> = {};

   Object.keys(d).forEach((dKeys: string): void => {
      const val = d[dKeys];
      if (typeof val !== 'undefined') {
         out[dKeys] = f(val);
      }
   });

   return out;
};
/* In the above example, the `if` statement is required as we cannot 
allow undefined to be passed (Dict<T> has undefined allowed as value).

Note that it was necessary to make const variable `val`
and you cannot just say d[dKeys] because dKeys is mutable
and can be changed inside the if statement */


/* returns an accumulated answer by applying some function/callback to 
each of the entries */

/* reduce Dict<T> -> ( T -> boolean ) -> Dict <T> */
export function reduceDict<T>(d: Dict<T>, f: (_: T) => boolean): Dict<T> {
   const out: Dict<T> = {};
   Object.keys(d).forEach((dKey: string): void => {
      const val = d[dKey];
      if (typeof val !== 'undefined' && f(val)) {
         out[dKey] = val;
      }
   })
   return out;
};