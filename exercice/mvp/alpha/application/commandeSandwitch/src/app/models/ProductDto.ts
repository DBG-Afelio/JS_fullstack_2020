import { Supplier } from './Supplier';
import { Option } from './Option';

export interface ProductDto {
    id: number;
    name: string;
    description: string;
    price: number;
    options: Option[];
    supplier: Supplier;
}
