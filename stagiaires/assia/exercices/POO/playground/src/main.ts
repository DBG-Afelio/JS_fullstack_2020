import { Plateau } from "./hanoi/Plateau";
import { TourId } from "./hanoi/TourEnum";
import { PlateauDOMSection } from "./hanoi/PlateauDOMSection";

const tourOriginNode: HTMLSelectElement | null = document.querySelector(".tourFrom");
const tourDestinationNode: HTMLSelectElement | null = document.querySelector(".tourTo");
const playBtn: HTMLInputElement | null = document.querySelector(".play-btn");
const resetBtn: HTMLInputElement | null = document.querySelector(".reset-btn");
const nbDiskNode: any = document.querySelector(".nombre-disk");
const challengeAcceptedNode: HTMLInputElement | null = document.querySelector(".check-challenge");
const challengeBetNode: HTMLInputElement | null = document.querySelector(".bet-challenge");
const coupsNode:any = document.querySelector(".nb-coups");
const messagesNode: any = document.querySelector(".message-player");
const stackGaucheParentNode:HTMLElement | null = document.querySelector(".stack-gauche");
const stackCentreParentNode:HTMLElement | null= document.querySelector(".stack-centre");
const stackDroiteParentNode:HTMLElement | null= document.querySelector(".stack-droite");
let jeu: Plateau;
let jeuVisu: PlateauDOMSection

//---------------------EVENTS-------------------
window.addEventListener('load', onload);
playBtn?.addEventListener('click', playAmove);
resetBtn?.addEventListener('click', startOver);




function onload() :void{
    jeu = new Plateau({ accepted: false, bet: 0 }, Number(nbDiskNode.value)); 
    jeu.startOver();
    jeuVisu = new PlateauDOMSection(jeu, stackGaucheParentNode, stackCentreParentNode, stackDroiteParentNode);
    jeuVisu.updateAllStacks();
}

function playAmove() :void{
    const from = tourOriginNode?.options[tourOriginNode.selectedIndex].value;
    const to = tourDestinationNode?.options[tourDestinationNode.selectedIndex].value;
    if (from && to) {
        jeu.moveDisk(from, to);
        jeuVisu.updateAllStacks();
        coupsNode.value = `${jeu.getMovesCount()}`;
    }
    if (jeu.isWin()) {
        messagesNode.textContent = 'CONGRATS !!! YOU DID IT !'
    } else {
        messagesNode.textContent = 'KEEP IT UP DUDE !!! !'
    }
}

function startOver(): void{
    jeu.startOver();
    jeuVisu.updateAllStacks();
    coupsNode.value = `${jeu.getMovesCount()}`;
}