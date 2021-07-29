const pluck =
   <T, K extends keyof T>(key: K, ...objList: T[]): T[K][] => {
      return objList.reduce(
         (prevRes: T[K][], obj: T) => {
            if (typeof obj[key] !== 'undefined') {
               prevRes.push(obj[key]);
            }
            return prevRes;
         }, []
      );
   }

interface Point {
   x: number; y: number; label: string
}
const myPoint_A: Point = { x: 1, y: 2, label: "start" };
const myPoint_B: Point = { x: 2, y: 3, label: "mid" };
const myPoint_C: Point = { x: 3, y: 4, label: "end" };

console.log(pluck('label', myPoint_A, myPoint_B, myPoint_C));
// [ 'start', 'mid', 'end' ]

// --------------------------------------------------------------
const getValues = <T, K extends keyof T>(obj: T): T[K][] => {
   return Object.keys(obj).map(key => obj[(key as K)]);
}

// --------------------------------------------------------------

type RecArr<T> = Array<T | RecArr<T>>;

const flatten =
   <T,>(arrArg: RecArr<T>, depth: number = 1): RecArr<T> => {
      return arrArg.reduce(
         (prevRes: RecArr<T>, elem) => {
            (Array.isArray(elem) && depth > 0)
               ? prevRes.push(...flatten(elem, depth - 1))
               : prevRes.push(elem);
            return prevRes;
         }, []
      );
   }

console.log(flatten([1, 2, ['a', 4, [5, 6, [7, 8]]]], 1));
// [ 1, 2, 3, 4, [ 5, 6, [ 7, 8 ] ] ]
console.log(flatten([1, 2, [3, 4, [5, 6, [7, 8]]]], 2));
// [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]

// --------------------------------------------------------------
// f, g, h (a) -> f(g(h(a)))  - conventianal
// f, g, h (a) -> h(g(f(a))) - what we want ?
const revComp = (arg: any, ...f: ((_: any) => any)[]): any => {
   return f.reduce((prevValue: any, curFunc: (_: any) => any) => {
      return curFunc(prevValue);
   }, arg
   );
}
// --------------------------------------------------------------