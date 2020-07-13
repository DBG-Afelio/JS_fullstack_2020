import { OptionDto } from './OptionDto';

export class Option {
    constructor(
        public id: number,
        public nom: string,
        public surcout: number,
    ) { }

    public getId():number {
        return this.id;
    }

    public getNom():string {
        return this.nom;
    }

    public getSurcout():number {
        return this.surcout;
    }
    
    public static fromDto(optionDto: OptionDto): Option {
        return new Option(
            optionDto.id, 
            optionDto.nom, 
            optionDto.surcout, 
        );
    }

    public toDto(): OptionDto {
        return {
            id: this.id,
            nom: this.nom,
            surcout: this.surcout,
        }
    }
}
