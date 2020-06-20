import { Tour } from "./Tour";
import { TourId } from "./TourEnum";
export declare class Plateau {
    private challenge;
    private tourGauche;
    private tourCentre;
    private tourDroite;
    private movesCount;
    constructor(challenge: {
        accepted: boolean;
        bet: number;
    });
    showPlateau(): void;
    getTourById(id: TourId): Tour;
    moveDisk(fromTour: TourId, toTour: TourId): boolean;
    private incrementsMoves;
    getMovesCount(): number;
    isWin(): boolean;
    isGameOver(): boolean;
}
