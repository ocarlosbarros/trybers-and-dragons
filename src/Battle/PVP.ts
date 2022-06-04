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
    let round = 0;

    while (round < 2) {
      this.player.attack(this._secondPlayer);
      this._secondPlayer.attack(this._player);
      round += 1;
    }
    
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;