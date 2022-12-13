import Robot from "./robot";
import { Container } from "./types";

export default class Fleet implements Container {
  combatants: Robot[];

  constructor() {
    this.combatants = [];
    this.combatants.push(
      new Robot("Mike"),
      new Robot("Nevin"),
      new Robot("Amy")
    );
  }
}
