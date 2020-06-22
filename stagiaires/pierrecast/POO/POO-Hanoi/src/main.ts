import { Board } from './Board';
import { Tower } from './Tower';
import { Token } from './Token';

let board = new Board();
console.log('init', board);
board.move(1,3);

console.log('move', board);
