import SimpleFighter from './Fighter/SimpleFighter';

class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.lifePoints;
    
    if (damage > 0) this._lifePoints -= damage;
    
    let lifePoint = this.lifePoints;

    if (lifePoint <= 0) this._lifePoints = -1;
    
    lifePoint = this.lifePoints;
    return lifePoint;
  }
}

export default Monster;
