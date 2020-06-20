import { Plateau } from "./hanoi/Plateau";
import { TourId } from "./hanoi/TourEnum";

let jeu = new Plateau({ accepted: false, bet: 0 });
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