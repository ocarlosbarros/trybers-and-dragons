import Battle from './Battle';
import SimpleFighter from '../Fighter/SimpleFighter';

class PVP extends Battle {
  private _player: SimpleFighter;
  private _secondPlayer: SimpleFighter;

  constructor(player: SimpleFighter, secondPlayer: SimpleFighter) {
    super(player);
    this._player = player;
    this._secondPlayer = secondPlayer; 
  }

  fight(): number {
    while (this._player.lifePoints > 0 && this._secondPlayer.lifePoints > 0) {
      this.player.attack(this._secondPlayer);
      this._secondPlayer.attack(this._player);
    }
    
    return super.fight();
  }
}

export default PVP;