import { Option } from '../optionModel/Option';
import { OptionDto } from '../optionModel/OptionDto';

export interface ProductDto {
    id: number;
    nom: string;
    description: string;
    prix: number;
    options: OptionDto[];
    fourn_id: number;
}
