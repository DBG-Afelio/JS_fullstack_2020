import { CreateCredentialsDto } from './CreateCredentialsDto';

export class Credentials {
    constructor(
        public login: string,
        public password: string,
    ){}

    public toDto(): CreateCredentialsDto {
        return {
            login: this.login,
            _password: this.password
        }
    }
}