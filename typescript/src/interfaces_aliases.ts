import { HasEmail, HasPhoneNumber, } from "./basics";
/* type aliases */

type StrOrInt = string | number;
type Pair = [number, number];


/* interfaces can be extended as well */
export interface HasInternationalPhoneNumber
   extends HasPhoneNumber {
   countryCode: string;
}
// now also has countryCode

/* call signatures */
interface ContactMessenger1 {
   (contact: HasEmail | HasPhoneNumber, message: string): void
}

type ContactMessenger2 =
   (contact: HasEmail | HasPhoneNumber, message: string) => void;

/* In Interfaces, you specify property name and give the whole 
object shape */
interface TypeNameMe { x: string };
/* But type are a little different */
type TypeNameMeToo = string;

/* We can think of interfaces as structs interface while type as typedefs in C++
In type, you will always have a 'type' in the left hand side*/

const emailer: ContactMessenger1 = (_contact, _message) => {
   /* Since we already explicitly mentioned the type for emailer,
   now we don't have to give indivisual types for its parameters */
};

/* arrays */
/* 
interface PhoneNumberDict {
   [index: string]: {
      areaCode: string;
      num: number;
   };
}
It can have no entry for particular index but there's no way to capture no entry
 remember we used to have `None` in haskell. 
 So we need to have undefined as well in value type */

interface PhoneNumberDict {
   [index: string]:
   undefined | {
      areaCode: string;
      num: number;
   };
}

/*
// commented out as PhoneNumberDict has more properties added below, which hoists ups 
// Which essentially says that "Interfaces hoists!!"
const d: PhoneNumberDict = {
};
d.abc;
if (d.abc) {
   // check for none
}

if (typeof d.abc === 'string') {
   // d.abc has `never` type
}
*/

// we can combine interfaces 
interface PhoneNumberDict {
   home: { areaCode: string; num: number },
   office: { areaCode: string; num: number }
   /* Both of these become required properties */
}
// const d: PhoneNumberDict = {} /* Error as home and office are not present */
const d: PhoneNumberDict = {
   home: { areaCode: "123", num: 1221312 }, // required
   office: { areaCode: "213", num: 21312312 }, // required
   emergency: { areaCode: "123", num: 213124124 }, // optional
   iphone: undefined, // optional, and yes allowed!
}

d.home; // definitely present
d.office; // definitely present
d.blueberry; // maybe maynot be

/* How to make self referencing type work!
Use interface hoisting
*/

// NumVal can be 1, 2, 3 or array of NumVal
type NumVal = 1 | 2 | 3 | NumArr;
interface NumArr extends Array<NumVal> { };

const yy: NumVal = 1;
const y: NumVal = [1, 2, 3, [1, 2, 3, 1, 2], [1, 2, [1, 2]]];
const x: NumArr = [1, 2, 3, [1, 2, 3], [1, [1, 2, 3]]];
const z: NumArr = [3];

interface NumArr2 {
   [_: number]: 1 | 2 | 3 | NumArr2 | undefined;
}

interface MyRecArray<T> {
   [_: number]: T | undefined | MyRecArray<T>;
}

const ar: MyRecArray<number> = [1, 2, [1, 2, 3], [[1, 2, 3], 1], []]

let imAr: Readonly<MyRecArray<number>> = [1, 2, 3]

