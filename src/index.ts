import Character from './Character';
import getRandomInt from './utils';
import Monster from './Monster';
import Dragon from './Dragon';
import PVP from './Battle/PVP';
import PVE from './Battle/PVE';
import Battle from './Battle/index';

const player1 = new Character('Bramrus hokuck');
const player2 = new Character('Naedithas Springheart');
const player3 = new Character('jai za');

const random = getRandomInt(1, 5);

let randomUp = 0;
while (randomUp < random) {
  player1.levelUp();
  randomUp += 1;
}

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => {
    battle.fight();
  });
};

export { 
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};