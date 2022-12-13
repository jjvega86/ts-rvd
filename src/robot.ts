import { Combatant } from "./types";
import Weapon from "./weapon";

import { getInput } from "./lib/input";

export default class Robot implements Combatant {
  readonly name: string;
  health: number;
  weapon: Weapon;

  constructor(name: string) {
    this.name = name;
    this.weapon = this.initializeWeapon();
    this.health = 100;
  }

  initializeWeapon(): Weapon {
    return new Weapon("Sword", 25);
  }

  attack(dinosaur: Combatant) {
    dinosaur.health -= this.weapon.attackPower;
  }
}
