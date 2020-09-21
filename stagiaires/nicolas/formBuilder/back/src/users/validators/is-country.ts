import { Injectable } from "@nestjs/common";
import { ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { map, tap } from "rxjs/operators";
import { UsersService } from "../users.service";

@ValidatorConstraint({

    name:'IsCountry',
    async:true

})

@Injectable()
export class IsCountry implements ValidatorConstraintInterface {

    codeList;
    constructor(private usersService:UsersService){}

    validate(value:string){

        return this.usersService.getAllCountryCode()
            .pipe(
                tap(codeList => this.codeList = codeList),
                map(codeList => codeList.includes(value))

            ).toPromise()
       
    }
    defaultMessage(){


        return `$value n'est pas un code alpha3 codeList : ${this.codeList}` 

    }

}
