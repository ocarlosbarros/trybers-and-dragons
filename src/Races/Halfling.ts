import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints:number;
  private static _halflingInstace = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    this._halflingInstace += 1;
    return this._halflingInstace;
  }
}

export default Halfling;