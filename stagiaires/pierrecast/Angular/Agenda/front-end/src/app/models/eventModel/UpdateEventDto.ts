import { Tag } from '../tagModel/Tag';

export interface UpdateEventDto {
    code: string;
    name: string;
    date_start: Date;
    date_end: Date;
    url: string;
    localisation: string;
    image: string;
    country: string;
    description: string;
    departement: string;
    postcode: number;
    address: string;
    city: string;
    contact: string;
    phone: string;
    email: string;
    tags: Partial<Tag>[];
}
   