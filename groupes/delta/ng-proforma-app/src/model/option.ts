export class Option {
    constructor(public nom:string,public surcout:number,public id:number) {
        this.nom = nom;
        this.surcout = surcout;
        this.id = id;
    }

    static fromDto(option:{
        nom:string;
        surcout:number;
        id:number
    }):Option {
        return new Option(option.nom, option.surcout, option.id);
    }

    toDto():{
        nom:string;
        surcout:number;
        id:number
    } {
        return {
            nom: this.nom,
            surcout: this.surcout,
            id: this.id
        }
    }
}
