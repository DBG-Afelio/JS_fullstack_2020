import { De } from './de';
import { raceEnum } from './race.enum';
import { ClasseEnum } from './classe.enum';

export abstract class Personnage {
    
    

    protected pv: number;
    private de: De = new De();

    constructor(
        protected nom: string,
        protected race: raceEnum,
        protected classe: ClasseEnum,
        protected niveau: number,
        protected force: number,
        protected dexterite: number,
        protected intelligence: number,
        protected constitution: number
        ) {
        this.initPV();
    }

    protected initPV() {
        this.pv = this.de.de20() + (this.constitution * this.niveau);
    }

}