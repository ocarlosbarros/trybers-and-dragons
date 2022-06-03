import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints:number;
  private static _instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    this._instance += 1;
    return this._instance;
  }
}

export default Halfling;