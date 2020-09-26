import { MyEvent } from '../event.model/MyEvent';
import { CreateTagDto } from './create-tag-dto';
import { TagDto } from './tag-dto';

export class Tag {
  constructor(
    public id: number = 0,
    public name: string,
    public color: string,
    public events: Event[]
  ){}

  public static fromDto(tagDto: TagDto): Tag {
    return new Tag(
      tagDto.id,
      tagDto.name,
      tagDto.color,
      tagDto.events
    );
  }

  public toCreateTagDto(): CreateTagDto {
    return {
      name: this.name,
      color: this.color,
    };
  }

  public toTagDto(): TagDto {
    return {
      id: this.id,
      name: this.name,
      color: this.color,
      events: this.events,
    };
  }
}
