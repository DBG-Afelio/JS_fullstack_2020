import { Plateau } from "./Plateau";
import { TourId } from "./TourEnum";
import { Disk } from "./Disk";

export class PlateauDOMSection{
    constructor(
        private jeu: Plateau,
        private tourGaucheParentNode:HTMLElement | null,
        private tourCentreParentNode:HTMLElement| null,
        private tourDroiteParentNode:HTMLElement | null) {
        this.jeu = jeu;
        
        this.tourGaucheParentNode = tourGaucheParentNode;
        this.tourCentreParentNode = tourCentreParentNode;
        this.tourDroiteParentNode = tourDroiteParentNode;
    }


    public updateAllStacks() {

        for (let tourID in TourId) {
            let tourParentNode: HTMLElement | null = null;
            let stack:Disk[]=[]
            switch (tourID) {
                case TourId.GAUCHE: {
                    tourParentNode = this.tourGaucheParentNode;
                    stack = this.jeu.getTourById(TourId.GAUCHE).getStack();
                    break;
                }
                case TourId.CENTRE: {
                    tourParentNode = this.tourCentreParentNode;
                    stack = this.jeu.getTourById(TourId.CENTRE).getStack();
                    break;
                }
                case TourId.DROITE: {
                    tourParentNode = this.tourDroiteParentNode;
                    stack = this.jeu.getTourById(TourId.DROITE).getStack();
                    break;
                }
            }
            if (tourParentNode !== null) {
                this.updateOneStack(tourParentNode, stack);
            } else {
                console.log("dans PlateauSection.ts ligne 44 : PAS de node recupered");
            }
        }
            
    }

        
    
    public updateOneStack(tourParentNode: HTMLElement, stack: Disk[]): void {
        while (tourParentNode.firstChild !== null) {
            tourParentNode.removeChild(tourParentNode.firstChild);
        }
        stack.forEach(disk => {
            let rowElt = document.createElement("tr");
            tourParentNode.appendChild(rowElt);
            let diskElt = document.createElement("td");
            diskElt.textContent = `${disk.getId()}`;
            diskElt.style.width = `${1 + disk.getId() * 20}px`;
            diskElt.style.backgroundColor = 'white';
            diskElt.style.textAlign = 'center';
            console.log(`diskID string : ${disk.getId()}`);
            rowElt.appendChild(diskElt);
        });
    }


}