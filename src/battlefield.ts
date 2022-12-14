import Herd from "./herd";
import Fleet from "./fleet";

export default class Battlefield {
  herd: Herd;
  fleet: Fleet;

  constructor() {
    this.herd = new Herd();
    this.fleet = new Fleet();
  }

  runGame() {
    this.displayWelcome();
    while (
      this.herd.combatants.length > 0 &&
      this.fleet.combatants.length > 0
    ) {
      this.runRound();
      this.displayStatus();
    }
    this.displayWinner();
  }

  displayWelcome() {
    console.log(`Welcome to Robot vs. Dinosaur!`);
  }

  runRound() {
    let lastDino = this.herd.combatants.length - 1;
    let lastRobo = this.fleet.combatants.length - 1;

    this.herd.combatants[lastDino].attack(this.fleet.combatants[lastRobo]);
    this.fleet.combatants[lastRobo].attack(this.herd.combatants[lastDino]);

    if (this.herd.combatants[lastDino].health <= 0) {
      this.herd.combatants.pop();
    }

    if (this.fleet.combatants[lastRobo].health <= 0) {
      this.fleet.combatants.pop();
    }
  }

  displayStatus() {
    console.log(`There are ${this.herd.combatants.length} Dinosaurs left.`);
    console.log(`There are ${this.fleet.combatants.length} Robots left.`);
  }

  displayWinner() {
    if (this.fleet.combatants.length === 0) {
      console.log(`Dinosaurs win!`);
    } else {
      console.log(`Robots win!`);
    }
  }
}
