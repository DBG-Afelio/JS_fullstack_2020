import { RoleDto } from "./rolesDto";

export class Role {
    constructor( public  id : number , public role : string ){  
    }
    toDto(): RoleDto {
        return {
            id : this.id,
            role : this.role ,
            
        }
    }
    static fromBd(dtoResult : { id : number , role : string}) : Role {
        return new Role(dtoResult.id , dtoResult.role);
    }
}
