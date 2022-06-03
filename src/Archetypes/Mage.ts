import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private static _mageInstace = 0;
  private _energyType: EnergyType;  
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    this._mageInstace += 1;
    return this._mageInstace;
  }
}

export default Mage;