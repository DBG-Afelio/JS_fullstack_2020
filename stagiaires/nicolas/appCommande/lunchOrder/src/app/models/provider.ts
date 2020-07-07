import { ProviderDto } from './provider-dto';

export class Provider {

    constructor(public id:number,
                public name:string,
                public description:string,
                public isClosed:boolean,
                public isArchived:boolean,
                public timeTable:boolean[],
                public phone:string){}


    static fromDto(providerDto:ProviderDto):Provider{

        return new Provider(
            providerDto.id,
            providerDto.nom,
            providerDto.description,
            providerDto.ferme,
            providerDto.archive,
            providerDto.horaire,
            providerDto.tel
        )
    }
    toDto():ProviderDto{

        return  {

            "id": this.id,
            "nom": this.name,
            "description": this.description,
            "ferme": this.isClosed,
            "archive": this.isArchived,
            "horaire": this.timeTable,
            "tel": this.phone

        }

    }

}
