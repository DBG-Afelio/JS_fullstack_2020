import { Supplier } from '../supplierModel/Supplier';
import { Option } from '../OptionModel/Option';

export interface ProductDto {
    id: number;
    name: string;
    description: string;
    prix: number;
    options: Option[];
    fourn_id: number;
}
