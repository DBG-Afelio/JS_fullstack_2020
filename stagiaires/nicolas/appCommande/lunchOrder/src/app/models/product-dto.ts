import { OrderOption } from './order-option';

export interface ProductDto {

    "nom": string;
    "description": string;
    "prix": number;
    "options":OrderOption[];
    "fourn_id": number;
    "id": number;

}
