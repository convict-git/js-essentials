/*
interface A {
   x: number;
   y: string;
   z: boolean;
};

const X: A = { x: 12, y: "hello", z: true };

function a<K extends keyof A>(arg: K): void {
   console.log(arg, X[arg]);
}

const yy: { x: number } = { x: 2 };
let obj = Object.create(null);

Object.defineProperty(yy, 'me', { value: 'hello', enumerable: true });
Object.keys(yy).forEach((k) => { console.log(k) });
X['x'];
a('x');

class Al {
   constructor(public x: number, public y?: number) { }
}
* /

let myx = Al; /* storing Al in myx, myx is now the constructor of Al */
// let xxz = new myx(2);
// xxz.x;
//# sourceMappingURL=trial.js.map