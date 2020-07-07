import { Supplier } from '../supplierModel/Supplier';
import { Option } from '../OptionModel/Option';

export interface ProductDto {
    id: number;
    name: string;
    description: string;
    price: number;
    options: Option[];
    supplier: Supplier;
}
