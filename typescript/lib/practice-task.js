const pluck = (key, ...objList) => {
    return objList.reduce((prevRes, obj) => {
        if (typeof obj[key] !== 'undefined') {
            prevRes.push(obj[key]);
        }
        return prevRes;
    }, []);
};
const myPoint_A = { x: 1, y: 2, label: "start" };
const myPoint_B = { x: 2, y: 3, label: "mid" };
const myPoint_C = { x: 3, y: 4, label: "end" };
console.log(pluck('label', myPoint_A, myPoint_B, myPoint_C));
// [ 'start', 'mid', 'end' ]
// --------------------------------------------------------------
const getValues = (obj) => {
    return Object.keys(obj).map(key => obj[key]);
};
const flatten = (arrArg, depth = 1) => {
    return arrArg.reduce((prevRes, elem) => {
        (Array.isArray(elem) && depth > 0)
            ? prevRes.push(...flatten(elem, depth - 1))
            : prevRes.push(elem);
        return prevRes;
    }, []);
};
console.log(flatten([1, 2, ['a', 4, [5, 6, [7, 8]]]], 1));
// [ 1, 2, 3, 4, [ 5, 6, [ 7, 8 ] ] ]
console.log(flatten([1, 2, [3, 4, [5, 6, [7, 8]]]], 2));
// [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]
// --------------------------------------------------------------
// f, g, h (a) -> f(g(h(a)))  - conventianal
// f, g, h (a) -> h(g(f(a))) - what we want ?
const revComp = (arg, ...f) => {
    return f.reduce((prevValue, curFunc) => {
        return curFunc(prevValue);
    }, arg);
};
// --------------------------------------------------------------
//# sourceMappingURL=practice-task.js.map