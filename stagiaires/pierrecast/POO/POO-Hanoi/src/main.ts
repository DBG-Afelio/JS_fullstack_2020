import { Board } from './Board';
import { Tower } from './Tower';
import { Token } from './Token';

let board = new Board();
console.log('init', board);
board.move(1,3);
board.move(1,3);

board.move(1,2);
board.move(3,2);

board.move(1,4);

console.log('move', board);
board.showTowersContent();