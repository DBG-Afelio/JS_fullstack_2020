import { Tag } from '../tag.model/tag';
import { CreateEventDto } from './create-event-dto';
import { EventDto } from './event-dto';

export class MyEvent {

  constructor(
    public id: number = 0,
    public name: string,
    public startDate: Date,
    public endDate: Date,
    public url?: string,
    public description?: string,
    public gpsCoord?: string,
    public imageUrl?: string,
    public address?: Address,
    public tel?: string,
    public email?: string,
    public tags?: Tag[],
    public uId?: string,
  ) {}

  public static fromDto(eventDto: EventDto): MyEvent {
    return new MyEvent(
      eventDto.id,
      eventDto.name,
      eventDto.startDate,
      eventDto.endDate,
      eventDto.url,
      eventDto.description,
      eventDto.gpsCoord,
      eventDto.imageUrl,
      {
        country: eventDto.country,
        department: eventDto.department,
        zipcode: eventDto.zipcode,
        city: eventDto.city,
        street: eventDto.street
      },
      eventDto.tel,
      eventDto.email,
      eventDto.tags,
      eventDto.uId
    );
  }

  public toCreateEventDto(): CreateEventDto {
    return {
      name: this.name,
      startDate: this.startDate,
      endDate: this.endDate,
      url: this.url,
      description: this.description,
      gpsCoord: this.gpsCoord,
      imageUrl: this.imageUrl,
      country: this.address.country,
      department: this.address.department,
      zipcode: this.address.zipcode,
      city: this.address.city,
      street: this.address.street,
      tel: this.tel,
      email: this.email,
      tags: this.tags,
      uId: this.uId
    };
  }

  public toEventDto(): EventDto {
    return {
      id: this.id,
      name: this.name,
      startDate: this.startDate,
      endDate: this.endDate,
      url: this.url,
      description: this.description,
      gpsCoord: this.gpsCoord,
      imageUrl: this.imageUrl,
      country: this.address.country,
      department: this.address.department,
      zipcode: this.address.zipcode,
      city: this.address.city,
      street: this.address.street,
      tel: this.tel,
      email: this.email,
      tags: this.tags,
      uId: this.uId
    };
  }

}

export interface Address {
  country: string;
  department: string;
  zipcode: number;
  city: string;
  street: string;
}
