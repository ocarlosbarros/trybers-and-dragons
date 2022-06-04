import Battle from './Battle';
import SimpleFighter from '../Fighter/SimpleFighter';

class PVE extends Battle {
  private _player: SimpleFighter;
  private _monsters: SimpleFighter[] = [];
  
  constructor(player: SimpleFighter, monsters: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._monsters = monsters; 
  }
  
  fight(): number {
    this._monsters.forEach((monster) => {
      while (this._player.lifePoints > 0 && monster.lifePoints > 0) {
        this.player.attack(monster);
        monster.attack(this._player);
      }
    });
      
    return super.fight();
  }
}

export default PVE;