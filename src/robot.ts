import { Combatant } from "./types";
import Weapon from "./weapon";

import { getInput } from "./lib/input";

export default class Robot implements Combatant {
  name: string;
  health: number;
  weapon: Weapon;

  constructor(name: string, health: number) {
    this.name = name;
    this.weapon = this.initializeWeapon();
    this.health = health;
  }

  initializeWeapon(): Weapon {
    let name: string = getInput("What is the weapon name?\n");
    let attackPower: number = parseInt(
      getInput("What is the attack power of the weapon? \n")
    );

    return new Weapon(name, attackPower);
  }
}
