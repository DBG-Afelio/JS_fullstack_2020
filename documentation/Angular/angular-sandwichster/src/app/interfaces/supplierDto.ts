export interface SupplierDto {
    "id": number,
    "nom": string,
    "description": string,
    "ferme": boolean,
    "archive": boolean,
    "horaire": boolean[],
    "tel": string
}