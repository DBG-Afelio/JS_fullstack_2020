import { RolesEnum } from "../enum/roles.enum";

export interface Payload {
    id: number,
    login: string,
    role: RolesEnum,
}