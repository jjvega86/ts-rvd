import { Combatant } from "./types";
import Weapon from "./weapon";

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
    console.log(`${dinosaur.name} has ${dinosaur.health} left.`);
  }
}
