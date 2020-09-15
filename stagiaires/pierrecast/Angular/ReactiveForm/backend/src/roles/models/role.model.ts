import { RoleDto } from "../dtos/roleDto";

export class Role {

    constructor(
        public id: number,
        public role: string,
       
    ) {
        
    }

    public toDto() :RoleDto {
        return  {
            id: this.id,
            role: this.role,
        }
    }
}
