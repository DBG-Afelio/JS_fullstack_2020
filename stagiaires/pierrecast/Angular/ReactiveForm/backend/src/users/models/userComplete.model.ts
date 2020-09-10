import { Role } from "src/roles/models/role.model";
import { User } from "./user.model";
import { UserCompleteDto } from "../dtos/userCompleteDto";

export class UserComplete {
    constructor(
        public user: User,
        public nationality: string,
        public roles: Role[],
    ) {

    }

    public toDto() :UserCompleteDto {
        return  {
            user: this.user.toDto(),
            nationality: this.nationality,
            roles: this.roles,
        }
    }
}