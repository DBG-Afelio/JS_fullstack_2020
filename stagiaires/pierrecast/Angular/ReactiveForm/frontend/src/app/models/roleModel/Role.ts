import { RoleDto } from './RoleDto';

export class Role {
    constructor(
      public id: number,
      public role: string,
    ) {
        this.id = id;
        this.role = role;
    }

    public getId():number {
        return this.id;
    }
 
    public getRole():string {
        return this.role;
    }

    public static fromDto(roleDto: RoleDto): Role {
        return new Role(
            roleDto.id, 
            roleDto.role, 
        );
    }

    public toDto(): RoleDto {
        return {
            id: this.id,
            role: this.role,
        }
    }
}