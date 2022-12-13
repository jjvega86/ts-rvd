import Dinosaur from "./dinosaur";
import { Container } from "./types";

export default class Herd implements Container {
  combatants: Dinosaur[];

  constructor() {
    this.combatants = [];
    this.combatants.push(
      new Dinosaur("Jake"),
      new Dinosaur("David"),
      new Dinosaur("Pascal")
    );
  }
}
