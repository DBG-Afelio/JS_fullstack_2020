import { RolesEnum } from 'src/app/enum/roles.enum';

export interface Payload {
    id: number,
    login: string,
    role: RolesEnum,
}