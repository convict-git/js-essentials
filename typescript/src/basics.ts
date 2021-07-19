let x = "hello world";
x = "hello mars";
/* type of x is 'string' */

const y = "hello world";
/* type of x is 'hello world' */
// y = "lkjasf"; /* Error */

{
   let z;
   z = 41;
   z = "abc";
   /* type of z is any */
}

{
   let z: number;
   z = 41;
   // z = "abc"; /* Now an error */
}

const ax = {
   x: 'hello world',
};
/* type of ax is { x : 'string' }, x property is mutable */

/* Arrays */
let aa = [];
aa.push(1);
aa.push("Hello");

let aax: number[] = [];
aax.push(1);
// aax.push("hello"); /* Now this is an error */

/* Tuples */
let bb: [number, string, string, number] = [
   123,
   "First",
   "Second",
   123123
];

let labelMe: { x: number, y: string }
labelMe = {
   x: 3,
   y: "hello Wors"
}

// labelMe = {x : 3} /* Error as property y is missing */

/* Now y is optional ?, indicates that y may or may not be there */
let labelMeV2: { x: number; y?: string }
labelMeV2 = { x: 3 } /* Now this works as y was optional */

/* to reuse a custom type, we can use interfaces */
interface TypeName {
   x: number;
   y: number;
   z?: string;
}

/* TypeName can be resued now */
let ee: TypeName = { x: 2, y: 2 } /* Z can be missing */
let ex: TypeName = { x: 3, y: 4, z: "hello world" } /* Z can be present */

/* Intersections */
export interface HasPhoneNumber {
   name: string;
   phone: number;
}

export interface HasEmail {
   name: string;
   email: string;
}

// let contactInfo =
let contactInfo: HasPhoneNumber | HasEmail =
   Math.random() > 0.5
      ?
      { name: "zeus", phone: 123124 }
      : { name: "orz", email: "hello@world.com" }

// You can access only the intersecting properties from outside?
// contactInfo.name is only available

/* Union types */
// need to have all the required properties 
let otherContactInfo: HasEmail & HasPhoneNumber =
{
   name: "zeus",
   phone: 2323423,
   email: "hello@world.com"
}


/*
- ts only cares about the object shapes for types
- Narrower values can be kept inside wider values
*/
