import { Tour } from "./Tour";
import { TourId } from "./TourEnum";
export declare class Plateau {
    private challenge;
    private nbDisk;
    private tourGauche;
    private tourCentre;
    private tourDroite;
    private movesCount;
    constructor(challenge: {
        accepted: boolean;
        bet: number;
    }, nbDisk?: number);
    showPlateau(): void;
    startOver(): void;
    getTourById(id: TourId | string): Tour;
    moveDisk(fromTour: TourId | string, toTour: TourId | string): boolean;
    private incrementsMoves;
    getMovesCount(): number;
    isWin(): boolean;
    isGameOver(): boolean;
}
