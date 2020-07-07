export interface ProductDto {

    "nom": string;
    "description": string;
    "prix": number;
    "options":
      {
        "nom": string,
        "surcout": number,
        "id": number
      }[];
    "fourn_id": number;
    "id": number;

}
