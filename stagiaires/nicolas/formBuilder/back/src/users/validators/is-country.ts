import { Injectable } from "@nestjs/common";
import { ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { map } from "rxjs/operators";
import { UsersService } from "../users.service";

@ValidatorConstraint({

    async:true

})
@Injectable()
export class IsCountry implements ValidatorConstraintInterface {

    constructor(private usersService:UsersService){}

    validate(value:string){

        return this.usersService.getAllCountryCode()
            .pipe(

                map(codeList => codeList.includes(value))

            ).toPromise()
       
    }
    defaultMessage(){

        return "($value) n'est pas un code alpha3"

    }

}
