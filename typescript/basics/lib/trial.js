;
const X = { x: 12, y: "hello", z: true };
function a(arg) {
    console.log(arg, X[arg]);
}
const yy = { x: 2 };
let obj = Object.create(null);
Object.defineProperty(yy, 'me', { value: 'hello', enumerable: true });
Object.keys(yy).forEach((k) => { console.log(k); });
// yy.me = "j";
X['x'];
a('x');
//# sourceMappingURL=trial.js.map