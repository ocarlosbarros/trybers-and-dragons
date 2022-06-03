import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name:string) {
    this._name = name;
    this._race = new Elf(this._name, 3);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this.race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get name(): string {
    return this._name;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    const energy = { ...this._energy };
    return energy;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    
    if (damage > 0) this._lifePoints -= damage;

    if (this._lifePoints <= 0) this._lifePoints = -1;
   
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp():void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
      
    const isNotAllowed = this._maxLifePoints > this._race.maxLifePoints;  
    
    if (isNotAllowed) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    const specialAttack = getRandomInt(1, 10);
    const damage = this.strength + (specialAttack * 2);
    enemy.receiveDamage(damage);
  }
}

export default Character;