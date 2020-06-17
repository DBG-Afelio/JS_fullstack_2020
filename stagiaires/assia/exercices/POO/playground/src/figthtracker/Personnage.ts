import { RaceEnum } from './RaceEnum';
import { RoleEnum } from './RoleEnum';
import { De } from './de';

export abstract class Personnage {

    protected niveau: number;
    protected pv: number = 0;
    private de: De = new De();

    constructor(
    protected nom: string,
    protected race: RaceEnum,
    protected role: RoleEnum,
    
    protected force: number,
    protected dexterite: number,
    protected intelligence: number,
    protected constitution: number,
    ) {
        this.niveau = 1;
        this.initPV();
    }

    protected initPV() {
        this.pv = this.de.de20() + (this.constitution * this.niveau);
    }

    public getBonusAtt(type: TypeAttaque): number{
        let bonusRole;
        if (this.role === RoleEnum.GUERRIER) {
            bonusRole = this.force;
        } else
            bonusRole = this.intelligence;
        return type.bonus = bonusRole;
        
    }

    public getBonusDef(type: TypeDefense): number;{
    let bonusRole;
    if (this.role === RoleEnum.GUERRIER) {
        bonusRole = this.force;
    } else
        bonusRole = this.dexterite;
    return type.bonus = bonusRole;
    }
    
    }

}