import { Tour } from "./Tour";
import { TourId } from "./TourEnum";

export class Plateau {
    private tourGauche: Tour;
    private tourCentre: Tour;
    private tourDroite: Tour;
    private movesCount: number;
    
    constructor(
        private challenge: { accepted: boolean, bet: number},
    ) {
        this.tourGauche = new Tour(TourId.GAUCHE, []);
        this.tourGauche.setFullStack(8);
        this.tourCentre = new Tour(TourId.CENTRE, []);
        this.tourDroite = new Tour(TourId.DROITE, []);
        this.movesCount = 0;
        this.challenge = { accepted: false, bet: 100 };

    }
    public showPlateau(): void{
        console.log(`Jeu en cours : `);   
        this.tourGauche.showStack();
        this.tourCentre.showStack();
        this.tourDroite.showStack();
    }

    public getTourById(id: TourId): Tour{
        let tour = this.tourCentre; //je n'arrive pas a initialiser correctement tour ---- ? let tour: Tour = { id : ... , stack : ....};
        switch (id) {
            case TourId.GAUCHE: {
                tour = this.tourGauche;
                break;
            }   
            case TourId.CENTRE: {
                tour = this.tourCentre;
                break;
            }
            case TourId.DROITE: {
                tour = this.tourDroite;
                break;
            }
        }
        return tour;
    }
    
    public moveDisk(fromTour: TourId, toTour: TourId): boolean{
        let moveOK: boolean = false;
        if (fromTour !== toTour) {
            const diskToMove = this.getTourById(fromTour).unstackDisk();
            if (diskToMove !== undefined && this.getTourById(toTour).stackDisk(diskToMove)) {
                this.incrementsMoves();
                moveOK = true;
                console.log('*** Move DONE ***');
            } else {
                console.log('!!! Move IMPOSSIBLE !!!');
            }
        } else {
            console.log('!!! Choose 2 differents Tours to allow a move !!!');
        }
        return moveOK;
    }

    private incrementsMoves(): void{
        this.movesCount += 1;
    }

    public getMovesCount(): number{
        return this.movesCount;
    }

    public isWin(): boolean{
        return (this.tourGauche.isStackEmpty() && this.tourCentre.isStackEmpty() && this.tourDroite.isStackFull());
    }

    public isGameOver(): boolean{
        return this.challenge.accepted === true && this.movesCount > this.challenge.bet && !this.isWin();
    }
}