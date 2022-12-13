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
    let name: string = getInput("What is the weapon name?\n");
    let attackPower: number = parseInt(
      getInput("What is the attack power of the weapon? \n")
    );

    return new Weapon(name, attackPower);
  }

  attack(dinosaur: Combatant) {
    dinosaur.health -= this.weapon.attackPower;
  }
}
