import { Pool } from "pg";

export class Errors{

    static instance:Errors
    pool:Pool = new Pool()

    static getInstance():Errors{

        if(!Errors.instance){

            Errors.instance = new Errors()

        }
        return Errors.instance

    }

    static noResult(resultRows:any[],response:any){

        if(resultRows.length === 0){

            throw new Error("not_found")

        }else{

            response.json(resultRows)
            return false

        }


    }

    static convertPGErrors(errorCode:string){

        let errorType = "UNKNOWN_ERROR";

        switch(errorCode.substr(0,2)){

            case "22":
                errorType = "value_error";
                break;

        }

        return errorType

    }

    static returnErrorMessage(errorType:string){

        let errorMsg = "Erreur inconnue";

        switch(errorType){

            case 'value_error':
                errorMsg = "Le type de valeur ne correspond pas";
                break;
            case 'not_found':
                errorMsg = "Aucun elements n'a été trouvé";
                break;

        }
        return errorMsg

    }

    static getStatus(errorType:string){

        let status = 500;
        switch(errorType){

            case 'value_error':
                status = 400;
                break;
            case 'not_found':
                status = 404;
                break;

        }

        return status

    }

}