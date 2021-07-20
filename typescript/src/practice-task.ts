const pluck =
   <T, K extends keyof T, S extends T>(key: K, ...objList: S[]): S[K][] => {
      return objList.reduce(
         (prevRes: S[K][], obj: S) => {
            if (typeof obj[key] !== 'undefined') {
               prevRes.push(obj[key]);
            }
            return prevRes;
         }, []
      );
   }

const getValues = <T, K extends keyof T>(obj: T): T[K][] => {
   return Object.keys(obj).map(key => obj[key]);
}

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

// f, g, h (a) -> f(g(h(a)))  - conventianal
// f, g, h (a) -> h(g(f(a))) - what we want ?
const revComp = (arg: any, ...f: ((_: any) => any)[]): any => {
   return f.reduce((prevValue: any, curFunc: (_: any) => any) => {
      return curFunc(prevValue);
   }, arg
   );
}