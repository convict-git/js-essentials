const pluckFromOne =
   <T, K extends keyof T>(obj: T, ...keys: K[]): (T[K] | undefined)[] => {
      let result: T[K][] = [];
      keys.forEach((key) => {
         const value = obj[key];
         if (typeof value !== 'undefined') {
            result.push(value);
         }
      });
      return result;
   }

const pluckFromAll =
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