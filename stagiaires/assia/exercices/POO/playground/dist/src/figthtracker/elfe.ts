import { Personnage } from "./Personnage";
import { RoleEnum } from "./RoleEnum";
import { RaceEnum } from "./RaceEnum";
export class Elfe extends Personnage {
    constructor(
        nom: string,
        role: RoleEnum,
    ){
    super(nom, RaceEnum.ELFE, role, 0, 1, 1, 0);
}

    
}
    