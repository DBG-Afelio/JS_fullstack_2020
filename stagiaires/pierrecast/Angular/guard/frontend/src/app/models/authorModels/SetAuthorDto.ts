import { User } from '../userModels/User';

export interface SetAuthorDto {
    familyname: string;
    firstname: string;
    email: string;
    presentation: string;
    active: boolean;
    userId: number;
}
