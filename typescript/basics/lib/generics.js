/* generics - just like c++ templates */
const isString = val => typeof val === 'string';
/* Constraints on type paramters */
function arrayToDict(ar) {
    const out = {};
    ar.forEach(val => {
        out[val.id] = val; // adding a property with id whose value is val
        /* Remember that we have to make sure since we are accessing id in val
        the val should definitely have 'id' as property, and this is enforced
        by extending { id: string}, so val can be anything but should definitely
        have val.id defined with string
        */
    });
    return out;
}
const x = { id: "hello", pid: "world" };
const y = { id: "bye_world" };
// arr: [{id: string, pid: string}, {id: string}]
// or 
// arr : {id: string} []
const arr = [x, y];
const z = arrayToDict(arr);
/* type parameters are scoped as well, just like function parameters */
// startTuple: (x: T) => ((y: U) => ([x, y] : [T, U])
function startTuple(x) {
    return function endTuple(y) {
        return [x, y];
    };
}
// t : [string, number]
const t = startTuple("Hello")(23);
/* NOTE: Do not overuse generics */
//# sourceMappingURL=generics.js.map