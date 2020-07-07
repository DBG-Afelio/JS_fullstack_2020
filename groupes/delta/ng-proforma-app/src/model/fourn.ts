import { FournDto } from './fournDto';


export class Fourn {



    constructor(public  id : number ,
        public nom : string ,
        public description : string , 
        public ferme : boolean ,
        public archive : boolean ,
        public horaire :boolean[] ,
        public tel : string ){

            this.id = id ;
            this.nom = nom ;
            this.description = description ;
            this.ferme = ferme ; 
            this.archive = archive ;
            this.horaire = horaire ;
            this.tel = tel ; 
            
    }
    static fromDto(fournDto:FournDto):Fourn{
        return new Fourn(
            fournDto.id ,
            fournDto.nom,
            fournDto.description,
            fournDto.ferme,
            fournDto.archive,
            fournDto.horaire,
            fournDto.tel
        )
    }
    toDto():FournDto {
        return { 
            id : this.id,
            nom : this.nom , 
            description : this.description,
            ferme : this.ferme ,
            archive:this.archive,
            horaire : this.horaire,
            tel : this.tel
        }

    }

}
