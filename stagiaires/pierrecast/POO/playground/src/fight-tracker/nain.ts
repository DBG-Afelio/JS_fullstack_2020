import { Personnage } from "./personnage";
import { raceEnum } from "./race.enum";
import { RoleEnum } from "./role.enum";

export class Nain extends Personnage {
    constructor( nom: string, role:RoleEnum) {
        super(nom, raceEnum.NAIN, role, 1, 0, 0, 1)
    }
} 
