import Race from './Race';

class Elf extends Race {
  private _maxLifePoints:number;
  private static _elfInstace = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    this._elfInstace += 1;
    return this._elfInstace;
  }
}

export default Elf;