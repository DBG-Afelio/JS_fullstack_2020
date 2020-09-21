import { Address } from 'cluster';
import { Tag } from '../tag.model/tag';

export interface EventDto {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  url: string;
  description: string;
  gpsCoord: string;
  imageUrl: string;
  country: string;
  department: string;
  zipcode: number;
  city: string;
  street: string;
  tel: number;
  email: string;
  tags: Tag[];
  uId: string;
}
