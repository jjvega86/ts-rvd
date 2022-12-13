import Herd from "./herd";
import Fleet from "./fleet";

export default class Battlefield {
  herd: Herd;
  fleet: Fleet;

  constructor() {
    this.herd = new Herd();
    this.fleet = new Fleet();
  }
}
