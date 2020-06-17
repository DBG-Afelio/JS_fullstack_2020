import { Cochon } from './examples/heritage/cochon';
import { Chien } from './examples/heritage/chien';

const peggy = new Cochon('BiffiII', 'F', 'pink');

const fouslecamp = new Chien('fouslecamp', 'bichon', 'M', 'rouge');

// console.log(fouslecamp.ecrire());
console.log(fouslecamp.toString());
console.log(fouslecamp+'');
// console.log(peggy.ecrire());



