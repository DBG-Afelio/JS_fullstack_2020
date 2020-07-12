import { Option } from '../optionModel/Option';

export interface ProductDto {
    id: number;
    nom: string;
    description: string;
    prix: number;
    options: Option[];
    fourn_id: number;
}
