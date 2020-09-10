import { NationalityDto } from "../dtos/nationalityDto";

export class Nationality {

    constructor(
        public id: number,
        public nationality: string,
       
    ) {
        
    }

    public toDto() :NationalityDto {
        return  {
            id: this.id,
            nationality: this.nationality,
        }
    }
}
