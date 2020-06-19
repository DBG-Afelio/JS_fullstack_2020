import { Personnage } from "./Personnage";
import { RoleEnum } from "./RoleEnum";
import { RaceEnum } from "./RaceEnum";

export class Nain extends Personnage {
    constructor(nom: string, role: RoleEnum) {
        super(nom, RaceEnum.NAIN, role, 1, 0, 0, 1);
    }
}