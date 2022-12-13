import { Combatant } from "./types";
import Weapon from "./weapon";

export default class Robot implements Combatant {
  name: string;
  health: number;
  weapon: Weapon;

  constructor(name: string, health: number) {
    this.name = name;
    this.weapon = new Weapon("Sword", 50);
    this.health = health;
  }

  initializeWeapon() {
    // TODO: write to take user input for Weapon params
  }
}
