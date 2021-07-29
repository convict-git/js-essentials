const ar = [1, 2, [1, 2, 3], [[1, 2, 3], 1], []];
/* Makes this readonly */
let imAr = [1, 2, 3];
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
const cat = {
    miffy: { age: 12, breed: 'stupid cat' },
    boris: { age: 13 },
    mordred: { breed: 'killing cat' }
};
function Access(obj, key) {
    return obj[key];
}
//# sourceMappingURL=utility-types.js.map