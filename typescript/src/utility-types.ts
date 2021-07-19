interface MyRecArray<T> {
   [_: number]: T | undefined | MyRecArray<T>;
}

const ar: MyRecArray<number> = [1, 2, [1, 2, 3], [[1, 2, 3], 1], []]

/* Makes this readonly */
let imAr: Readonly<MyRecArray<number>> = [1, 2, 3]

interface CatInfo {
   age: number;
   breed: string;
}

type CatName = "miffy" | "boris" | "mordred"

/*
interface Cat {
   [_: CatName]: CatInfo | undefined;
}
This throws an error as the index signature parameter cannot be a
literal or a generic type
*/

/* 
Partial sets all the properties to optional.

Needs all the possible value of CatName 
And can take a CatInfo or any subtype of it
*/
const cat: Record<CatName, Partial<CatInfo>> = {
   miffy: { age: 12, breed: 'stupid cat' },
   boris: { age: 13 },
   mordred: { breed: 'killing cat' }
}

/* Required make all the properties to mandatory */

/* 
in keyof - only to be used within type for specifying 
index signature parameter

extends keyof - to be used as type binding on generic parameter
 */

type MyPartial<T> = { [k in keyof T]?: T[k]; }

function Access<T, K extends keyof T>(obj: T, key: K): T[K] {
   return obj[key];
}