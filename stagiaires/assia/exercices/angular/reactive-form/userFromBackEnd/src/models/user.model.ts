import { CreateUser_Dto } from "src/dtos/CreateUser_Dto";
import { UpdateUser_Dto } from "src/dtos/UpdateUser_Dto";
import { QueryResultRow } from "pg";
import { User_Dto } from "src/dtos/User_Dto";

export class User {
    constructor(
        public id: number,
        public familyName: string,
        public firstName: string,
        public email: string,
        public nationId: number,
        public gender: string,
        public dob: Date,
        public pwd?: string,
        public login?: string,
        public freeFrom?: Date,
        public freeUntil?: Date,
    ){}
    

    public static fromQueryResultDb(queryResultRow: QueryResultRow): User{
        return new User(
            queryResultRow.id,
            queryResultRow.familyname,
            queryResultRow.firstname,
            queryResultRow.email,
            queryResultRow.nationality_id,
            queryResultRow.gender,
            queryResultRow.dateofbirth,
            queryResultRow.passwd,
            queryResultRow.login,
            queryResultRow.availablefrom,
            queryResultRow.availableuntil
        );
        // -- CREATE TABLE users (
        //     -- 	id SERIAL PRIMARY KEY,
        //     -- 	familyName VARCHAR(30) NOT NULL,
        //     -- 	firstName VARCHAR(30),
        //     -- 	email VARCHAR(50) NOT NULL,
        //     -- 	nationality_id SMALLINT references nationalities(id) ON UPDATE CASCADE ON DELETE CASCADE,
        //     -- 	gender GenderType NOT NULL,
        //     -- 	dateOfBirth DATE NOT NULL,
        //     -- 	passwd VARCHAR(100) NOT NULL,
        //     -- 	login VARCHAR(30) NOT NULL,
        //     -- 	availableFrom DATE,
        //     -- 	availableUntil DATE
        //     -- 	);
    }

    public toDto(): User_Dto{
        return {
            id: this.id,
            familyName: this.familyName,
            firstName: this.firstName,
            email: this.email,
            nationId: this.nationId,
            gender: this.gender,
            dob: this.dob,
            freeFrom: this.freeFrom,
            freeUntil: this.freeUntil,
            login: this.login,
        }
    }

    public toCreateUser_Dto(): CreateUser_Dto{
        return {
            familyName: this.familyName,
            firstName: this.firstName,
            email: this.email,
            nationId: this.nationId,
            gender: this.gender,
            dob: this.dob,
            freeFrom: this.freeFrom,
            freeUntil: this.freeUntil,
            pwd: this.pwd,
            login: this.login,
        }
    }

    public toUpdateUser_Dto(): UpdateUser_Dto{
        return {
            id: this.id,
            familyName: this.familyName,
            firstName: this.firstName,
            email: this.email,
            nationId: this.nationId,
            gender: this.gender,
            dob: this.dob,
            freeFrom: this.freeFrom,
            freeUntil: this.freeUntil,
            pwd: this.pwd,
            login: this.login,
        }
    }
}