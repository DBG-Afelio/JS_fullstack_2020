import { Hanoi } from "./hanoi";
import { Tower } from "./tower";
import { Token } from "./token";

const newHanoi = new Hanoi(3,8);

const tour1 = newHanoi.getTowerById(1);
const tour2 = newHanoi.getTowerById(2);
const tour3 = newHanoi.getTowerById(3);

if(tour1 && tour2 && tour3){

    tour1.moveTokenToTower(tour2);
    tour2.moveTokenToTower(tour3);
    tour1.moveTokenToTower(tour3);

}



console.log(tour1,tour2,tour3);

