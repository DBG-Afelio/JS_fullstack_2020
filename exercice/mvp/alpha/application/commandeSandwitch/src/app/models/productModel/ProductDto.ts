export interface ProductDto {
    id: number;
    nom: string;
    description: string;
    prix: number;
    options: Option[];
    fourn_id: number;
}

export type Option = {id: number, nom: string, surcout: number}
