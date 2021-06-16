export const Player = class {
  constructor(_user_name) {
    this.user_name = _user_name;
    this.rating = 0;
    this.health = 100;
    this.kills = 0;
    this.weapons = ["knife"];
  }
  fight(enemy_strength) {
    if (this.health * this.weapons.length > enemy_strength) {
      console.log(this.user_name, "wins!");
      this.health -= enemy_strength / this.weapons.length;
      this.rating +=
        (this.kills * this.rating + enemy_strength) / (this.kills + 1);
      this.kills += 1;
    } else {
      // losses
      console.log(this.user_name, "loses!");
      this.health = 0;
    }
  }
  add_weapon(weapon) {
    let already_present = false;
    for (let x = 0; x < this.weapons.length; x++) {
      if (this.weapons[x] == weapon) {
        console.log(weapon, "already present");
        already_present = true;
        break;
      }
    }
    if (already_present == false) {
      this.weapons.push(weapon);
      console.log("Weapon added", this.weapons);
    }
  }
};
