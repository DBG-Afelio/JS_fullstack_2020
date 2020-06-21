import { Plateau } from "./Plateau";
import { Disk } from "./Disk";
export declare class PlateauDOMSection {
    private jeu;
    private tourGaucheParentNode;
    private tourCentreParentNode;
    private tourDroiteParentNode;
    constructor(jeu: Plateau, tourGaucheParentNode: HTMLElement | null, tourCentreParentNode: HTMLElement | null, tourDroiteParentNode: HTMLElement | null);
    updateAllStacks(): void;
    updateOneStack(tourParentNode: HTMLElement, stack: Disk[]): void;
}
