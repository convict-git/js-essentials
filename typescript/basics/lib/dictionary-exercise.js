"use strict";
/* Implement map and reduce for dict type

Dict has some special properties?
- First of all, it's a set of key-value pairs (unique keys)
- all values are of same type
- all keys are of same type
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceDict = exports.mapDict = void 0;
/* map : Dict<T> -> (T -> U) -> Dict<U> */
function mapDict(d, f) {
    const out = {};
    Object.keys(d).forEach((dKeys) => {
        const val = d[dKeys];
        if (typeof val !== 'undefined') {
            out[dKeys] = f(val);
        }
    });
    return out;
}
exports.mapDict = mapDict;
;
/* In the above example, the `if` statement is required as we cannot
allow undefined to be passed (Dict<T> has undefined allowed as value).

Note that it was necessary to make const variable `val`
and you cannot just say d[dKeys] because dKeys is mutable
and can be changed inside the if statement */
/* returns an accumulated answer by applying some function/callback to
each of the entries */
/* reduce Dict<T> -> ( T -> boolean ) -> Dict <T> */
function reduceDict(d, f) {
    const out = {};
    Object.keys(d).forEach((dKey) => {
        const val = d[dKey];
        if (typeof val !== 'undefined' && f(val)) {
            out[dKey] = val;
        }
    });
    return out;
}
exports.reduceDict = reduceDict;
;
//# sourceMappingURL=dictionary-exercise.js.map