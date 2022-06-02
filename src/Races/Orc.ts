import Race from './Race';

class Orc extends Race {
  private _maxLifePoints:number;
  private static _orcInstace = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    this._orcInstace += 1;
    return this._orcInstace;
  }
}

export default Orc;