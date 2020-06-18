import { Personnage } from "./personnage";
import { RoleEnum } from "./role.enum";
import { raceEnum } from "./race.enum";

export class Elfe extends Personnage {
    constructor(nom: string, role: RoleEnum) {
        super(nom, raceEnum.ELFE, role, 0, 1, 1, 0);
    }

}