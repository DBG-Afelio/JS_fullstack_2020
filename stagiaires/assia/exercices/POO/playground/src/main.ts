import { Plateau } from "./hanoi/Plateau";
import { TourId } from "./hanoi/TourEnum";

const nbDisk: number = 8;

let jeu = new Plateau({ accepted: false, bet: 0 },nbDisk);
jeu.showPlateau();
console.log(`coups: ${jeu.getMovesCount()} - jeu gagned: ${jeu.isWin()}`);

console.log(jeu.moveDisk(TourId.GAUCHE, TourId.DROITE));
jeu.showPlateau();
console.log(`coups: ${jeu.getMovesCount()} - jeu gagned: ${jeu.isWin()}`);

console.log(jeu.moveDisk(TourId.GAUCHE, TourId.CENTRE));
jeu.showPlateau();
console.log(`coups: ${jeu.getMovesCount()} - jeu gagned: ${jeu.isWin()}`);

console.log(jeu.moveDisk(TourId.DROITE, TourId.CENTRE));
jeu.showPlateau();
console.log(`coups: ${jeu.getMovesCount()} - jeu gagned: ${jeu.isWin()}`);

console.log(jeu.moveDisk(TourId.DROITE, TourId.CENTRE));
jeu.showPlateau();
console.log(`coups: ${jeu.getMovesCount()} - jeu gagned: ${jeu.isWin()}`);
//console.log(jeu.getTourById(TourId.DROITE).getNbDisk());

jeu.startOver();
jeu.showPlateau();