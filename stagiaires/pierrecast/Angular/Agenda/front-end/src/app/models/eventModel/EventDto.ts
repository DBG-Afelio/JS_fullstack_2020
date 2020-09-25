import { Tag } from '../tagModel/Tag';

export interface EventDto {
    id: number;
    name: string;
    date_start: Date;
    date_end: Date;
    url?: string;
    description?: string;

    localisation?: string;
    image?: string;
    country?: string;
    departement?: string;
    city?: string;
    address?: string;
    
    postcode?: number;
    contact?: string;
    phone?: string;
    email?: string;
    code?: string;
    tags?: Tag[]
}
   