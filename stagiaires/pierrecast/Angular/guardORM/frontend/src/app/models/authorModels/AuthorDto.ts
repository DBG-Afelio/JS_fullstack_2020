import { UserDto } from '../userModels/UserDto';

export interface AuthorDto {
    id: number;
    familyname: string;
    firstname: string;
    email: string;
    presentation: string;
    active: boolean;
    user: UserDto;
}
