export interface ItemDto {

    nom: string,
    description: string,
    prix: number,
    options: {id: number, nom: string, surcout: number}[],
    fourn_id: number,
    id: number,

}
