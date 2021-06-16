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
