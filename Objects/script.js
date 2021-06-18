import { Player } from "./player.js";

const game = {
  screen_width: 180,
  screen_height: 150,
  players: [],
  add_player: function (_user_name) {
    let already_present = false;
    for (let x = 0; x < this.players.length; x++) {
      if (this.players[x].user_name == _user_name) {
        already_present = true;
        console.log("Username already exists!");
        break;
      }
    }
    if (already_present == false) {
      this.players.push(new Player(_user_name));
      console.log(_user_name, "player added!");
    }
  },
};

console.log(game);
game.add_player("Alice");
console.log(game.players[0]);
game.add_player("Bob");
console.log(game.players[1]);
game.players[0].fight(20);
game.players[0].add_weapon("sniper");
game.players[0].fight(10);
game.players[0].fight(30);
console.log(game.players[0]);

// From textbook
// Two variables are evaulated as equals only if they refer
// to the same object
{
  let x = {};
  let y = x;
  let z = {};
  console.log(x === y, x === z);
}

// using Object.prototype and Object.create
{
  // Creating a null object
  // x hold null object and doesn't inherit any prototype property whatsover
  let x = Object.create(null);
  console.log(x);
}

{
  // But this way we can create empty object
  let y = Object.create(Object.prototype);
  // y inherits Object.prototype but is empty object
  console.log("Y should be empty: ", y);
}

{
  /* 
  is it pass by value of pass by reference?
   actually it's pass by value 
   but the variable itself contains the reference to that object
   so if you access a parameter of the object through that variable 
   and try to change it value, it does infact, change the real object.
   But if you assign a new object to the variable, it doesn't affect at the 
   global scope. These are just place holders which stores
   references to objects!
   */
  function work(x, y, z) {
    x = 1; // make modification to x
    y.a = 2; // make modification to y's property!
    z = 5; // make modification to z
  }
  let x = 0,
    y = { a: 3 },
    z = 2;
  console.log("before", x, y, z);
  work(x, y, z);
  console.log("after", x, y, z);
  // only y's property changes
}

{
  // Trying of/in loops
  let x = { a: 1, b: 3 };
  for (let y in x) {
    // iterates over properties
    // y is a string, so access with brackets, x[y]
    console.log(typeof y, y, x[y]);
  }
  /* 
  x should be iterable for for-of loop 
  for (let y of x) {
    console.log(y);
  }
  */
}

{
  // object inheritance
  let a = { x: 1 };
  let b = Object.create(a); // b inherits x from a
  b.y = 3; // adding property y
  for (let prop in b) {
    // should show both x and y
    console.log("property of", typeof prop, prop, b[prop]);
  }
  console.log(b);
  // inherited properties show up in __proto__

  // we can even overwrite __proto__
  // to inherit some other objects
  let c = {
    x: 4,
    __proto__: b,
  };
  console.log(c, c.x, c.__proto__.y, c.__proto__.x);
}

{
  let x = { a: { b: 1, c: 2 } },
    y;
  y = x && x.a; // assign reference to the object hold by a to y
  y.c += 2; // hence change in y.c will affect x.a.c
  // or // if (x) if (x.a) y = x.a.b;
  console.log(y);
  console.log(x);
}
