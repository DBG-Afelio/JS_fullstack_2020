import { Tag } from '../tagModel/Tag';
import { EventDto } from './EventDto';
import { AddEventDto } from './AddEventDto';
import { UpdateEventDto } from './UpdateEventDto';

export class Event {
  public style: string = '';

  constructor(
    public id: number,
    public name: string,
    public date_start: Date,
    public date_end: Date,
    public url?: string,
    public description?: string,
    public localisation?: string,
    public image?: string,
    public country?: string,
    public departement?: string,
    public city?: string,
    public address?: string,
    public postcode?: number,
    public contact?: string,
    public phone?: string,
    public email?: string,
    public code?: string,
    public tags?: Tag[],

  ) {
  }

  public toDto(): EventDto {
      return  {
          id: this.id,
          name: this.name,
          date_start: this.date_start,
          date_end: this.date_end,
          url: this.url,
          description: this.description,
          localisation: this.localisation,
          image: this.image,
          country: this.country,
          departement: this.departement,
          city: this.city,
          address: this.address,
          postcode: this.postcode,
          contact: this.contact,
          phone: this.phone,
          email: this.email,
          code: this.code,
          tags: this.tags
      }
  }

  public static fromDto(eventDto: EventDto): Event {
    return new Event(
        eventDto.id ? eventDto.id : 0, 
        eventDto.name, 
        eventDto.date_start, 
        eventDto.date_end, 
        eventDto.url, 
        eventDto.description, 
        eventDto.localisation, 
        eventDto.image, 
        eventDto.country, 
        eventDto.departement, 
        eventDto.city, 
        eventDto.address, 
        eventDto.postcode, 
        eventDto.contact, 
        eventDto.phone, 
        eventDto.email, 
        eventDto.code, 
        eventDto.tags 
    );
  }


  public toUpdateDto(): UpdateEventDto {
    return  {
        name: this.name,
        date_start: this.date_start,
        date_end: this.date_end,
        url: this.url,
        description: this.description,
        localisation: this.localisation,
        image: this.image,
        country: this.country,
        departement: this.departement,
        city: this.city,
        address: this.address,
        postcode: this.postcode,
        contact: this.contact,
        phone: this.phone,
        email: this.email,
        code: this.code,
        tags: this.tags
    }
  }


  public toAddDto(): AddEventDto {
    return  {
        name: this.name,
        date_start: this.date_start,
        date_end: this.date_end,
        url: this.url,
        description: this.description,
        localisation: this.localisation,
        image: this.image,
        country: this.country,
        departement: this.departement,
        city: this.city,
        address: this.address,
        postcode: this.postcode,
        contact: this.contact,
        phone: this.phone,
        email: this.email,
        code: this.code,
        tags: this.tags
    }
  }
}
