"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
/* We can think of interfaces as structs interface while type as typedefs in C++
In type, you will always have a 'type' in the left hand side*/
const emailer = (_contact, _message) => {
    /* Since we already explicitly mentioned the type for emailer,
    now we don't have to give indivisual types for its parameters */
};
// const d: PhoneNumberDict = {} /* Error as home and office are not present */
const d = {
    home: { areaCode: "123", num: 1221312 },
    office: { areaCode: "213", num: 21312312 },
    emergency: { areaCode: "123", num: 213124124 },
    iphone: undefined, // optional, and yes allowed!
};
d.home; // definitely present
d.office; // definitely present
d.blueberry; // maybe maynot be
;
const yy = 1;
const y = [1, 2, 3, [1, 2, 3, 1, 2], [1, 2, [1, 2]]];
const x = [1, 2, 3, [1, 2, 3], [1, [1, 2, 3]]];
const z = [3];
const ar = [1, 2, [1, 2, 3], [[1, 2, 3], 1], []];
let imAr = [1, 2, 3];
//# sourceMappingURL=interfaces_aliases.js.map