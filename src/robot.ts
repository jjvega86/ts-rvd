import { Combatant } from "./types";

export default class Robot implements Combatant {
  name: string;
  attackPower: number;
  health: number;

  constructor(name: string, attackPower: number, health: number) {
    this.name = name;
    this.attackPower = attackPower;
    this.health = health;
  }
}
