/* prototypes and __proto__ */
{
  let t = { a: 3, b: -2 };
  let z = { a: 2, __proto__: t };
  let x = { a: 1, __proto__: z };

  console.log(t, z, x);
  console.log(x.a, x.__proto__.a, x.__proto__.__proto__.a, x.__proto__.b);
  console.log(Object.getPrototypeOf(x)); // or simply x.__proto__
}

{
  function Point(_x, _y, _z) {
    this.x = _x;
    this.y = _y;
    this.z = _z;
  }
  let p = new Point(1, 2, 3);

  // both have same result
  console.log(Object.getPrototypeOf(p));
  console.log(p.__proto__); // deprecated

  console.log(Object.getPrototypeOf(Point));
  console.log(Point.prototype);
  console.log(p);
  // .prototype available only for constructor functions

  // p.constructor contains the constructor Point
  let q = new p.constructor(3, 4, 5);
  console.log(q);
}
