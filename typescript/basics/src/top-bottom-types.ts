/* Top and bottom types */

// any and unknown

let anyVar: any = 1;
anyVar.s.d; // * This is allowed 

let unkVar: unknown = "hello world";
// unkVar.split(" ");
// ! This is NOT allowed, because the type still stays `unknown`
// You will have to narrow down the type by conditioning on it (type guards)

if (typeof unkVar === 'string') {
   unkVar.split(" "); // * Now works well!!!, check type of `unkVar` in this if block
}


class UnReachableError extends Error {
   constructor(y: never, message: string) {
      /* Super calls the contructor of the extended class */
      super(`We shouldn't reach this, \n${message}`);
   }
}

const vrk = 4 as string | number | boolean;

if (typeof vrk === 'string') {
   // * vrk is surely string
} else if (typeof vrk === 'number') {
   // * vrk is surely number
} else if (typeof vrk == 'boolean') {
   // * vrk is surely boolean
} else {
   // ! only here it become `never` as it has exhausted all the possibilities 
   throw new UnReachableError(vrk, 'Sorry!');
}