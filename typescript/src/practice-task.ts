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

// const pluck =
//    <T, K extends keyof T, S extends T>(key: K, ...objList: S[]): S[K][] => {
//       return objList.reduce(
//          (prevRes: S[K][], obj: S) => {
//             if (typeof obj[key] !== 'undefined') {
//                prevRes.push(obj[key]);
//             }
//             return prevRes;
//          }, []
//       );
//    }

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
const flatten = (arArg: any[], depth: number = 1): any[] => {
   return arArg.reduce(
      (prevRes: any[], elem: any) => {
         if (Array.isArray(elem) && depth > 0) {
            prevRes.push(...flatten(elem, depth - 1));
         } else {
            prevRes.push(elem);
         }
         // prevRes.push((Array.isArray(elem) && depth > 0) ? ...flatten(elem, depth - 1) : elem);
         return prevRes;
      }, []
   );
}

console.log(flatten([1, 2, [3, 4, [5, 6, [7, 8]]]], 1));
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