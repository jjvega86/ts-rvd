import { Combatant } from "./types";

export default class Dinosaur implements Combatant {
  readonly name: string;
  readonly attackPower: number;
  health: number;

  constructor(name: string) {
    this.name = name;
    this.attackPower = Math.floor(Math.random() * 100);
    this.health = 100;
  }

  attack(robot: Combatant) {
    robot.health -= this.attackPower;
    console.log(`${robot.name} has ${robot.health} left.`);
  }
}
