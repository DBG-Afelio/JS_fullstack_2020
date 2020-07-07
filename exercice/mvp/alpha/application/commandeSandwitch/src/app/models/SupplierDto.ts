export interface SupplierDto {
    id: number;
    name: string;
    description: string;
    closure: boolean;
    archieved: boolean;
    openings: boolean[];
    phone: string;
}
