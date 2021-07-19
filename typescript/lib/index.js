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
//# sourceMappingURL=index.js.map