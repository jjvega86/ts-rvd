export interface Combatant {
  readonly name: string;
  readonly attackPower?: number;
  health: number;
}

export interface Container {
  combatants: Array<Combatant>;
}
