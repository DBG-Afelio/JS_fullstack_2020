import { NationalityDto } from './NationalityDto';

export class Nationality {
    constructor(
      public id: number,
      public nationality: string,
    ) {
        this.id = id;
        this.nationality = nationality;
    }

    public getId():number {
        return this.id;
    }
 
    public getNationality():string {
        return this.nationality;
    }

    public static fromDto(nationalityDto: NationalityDto): Nationality {
        return new Nationality(
            nationalityDto.id, 
            nationalityDto.nationality, 
        );
    }

    public toDto(): NationalityDto {
        return {
            id: this.id,
            nationality: this.nationality,
        }
    }
}