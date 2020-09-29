export interface UserDto {
    id: number;
    login: string;
    _password: string;
    familyName?: string;
    firstName?: string;
}
