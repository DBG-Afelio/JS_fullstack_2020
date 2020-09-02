export interface ListAuteursDto {
    auteurs : AuteurItemDto[]
}

export interface AuteurItemDto {
    id: number,
    nom: string,
    prenom: string,
    email: string,
    presentation: string
}
