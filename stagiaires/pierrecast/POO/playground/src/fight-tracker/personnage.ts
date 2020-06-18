import { De } from './de';
import { raceEnum } from './race.enum';
import { RoleEnum } from './role.enum';

export abstract class Personnage {
    
    protected niveau: number = 1;
    protected pv: number = 0;
    private de: De = new De();

    constructor(
        protected nom: string,
        protected race: raceEnum,
        protected role: RoleEnum,
        protected force: number,
        protected dexterite: number,
        protected intelligence: number,
        protected constitution: number
        ) {
        
        this.niveau = 1;
        this.initPV();
        
    }

    protected initPV() {
        this.pv = this.de.de20() + (this.constitution * this.niveau);
    }

    abstract getBonusAtt(type: TypeAttaque): number;
    abstract getBonusDef(type: TypeDefense): number;

}