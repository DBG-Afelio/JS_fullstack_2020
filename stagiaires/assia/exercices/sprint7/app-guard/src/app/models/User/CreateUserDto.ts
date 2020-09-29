export interface CreateUserDto {
    login: string;
    _password: string;
    familyName?: string;
    firstName?: string;
}

