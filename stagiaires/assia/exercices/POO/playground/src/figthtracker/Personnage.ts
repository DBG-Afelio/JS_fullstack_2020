import { raceEnum } from './race.enum';
import { classEnum } from './class.enum';
import { De } from './de';

export abstract class Personne {

    protected pv: number;
    private de: De = new De();

    constructor(

    protected nom: string;
    protected race: raceEnum;
    protected classe: classEnum;
    protected niveau: number;
    protected force: number;
    protected dexterite: number;
    protected intelligence: number;
    protected constitution: number;

    ) {
        this.initPV();
    }

    protected initPV() {
        this.pv = this.de.de20() + (this.constitution * this.niveau);
    }

}