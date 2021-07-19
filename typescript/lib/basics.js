"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    let z;
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
let aax = [];
aax.push(1);
// aax.push("hello"); /* Now this is an error */
/* Tuples */
let bb = [
    123,
    "First",
    "Second",
    123123
];
let labelMe;
labelMe = {
    x: 3,
    y: "hello Wors"
};
// labelMe = {x : 3} /* Error as property y is missing */
/* Now y is optional ?, indicates that y may or may not be there */
let labelMeV2;
labelMeV2 = { x: 3 }; /* Now this works as y was optional */
/* TypeName can be resued now */
let ee = { x: 2, y: 2 }; /* Z can be missing */
let ex = { x: 3, y: 4, z: "hello world" }; /* Z can be present */
// let contactInfo =
let contactInfo = Math.random() > 0.5
    ?
        { name: "zeus", phone: 123124 }
    : { name: "orz", email: "hello@world.com" };
// You can access only the intersecting properties from outside?
// contactInfo.name is only available
/* Union types */
// need to have all the required properties 
let otherContactInfo = {
    name: "zeus",
    phone: 2323423,
    email: "hello@world.com"
};
/*
- ts only cares about the object shapes for types
- Narrower values can be kept inside wider values
*/
//# sourceMappingURL=basics.js.map