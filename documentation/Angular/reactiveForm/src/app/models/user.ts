export class User {
    public userId: number
    public firstName?: string;
    public lastName: string;
    public login: string = 'toto';
    public birthDate: Date = new Date();
    public nissorbce: string = '123456789';

    /**
     *
     */
    constructor(partialUser: {
        userId?: number
        firstName?: string;
        lastName: string;
        login?: string;
        birthDate?: Date;
        nissorbce?: number;
    }) {
        this.userId = partialUser.userId ? partialUser.userId : 0;
        this.lastName = partialUser.lastName;
    }

}
