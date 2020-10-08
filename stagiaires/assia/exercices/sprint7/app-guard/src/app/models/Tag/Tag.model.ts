import { Article } from '../Article/Article.model';
import { SetNewTagDto } from './SetNewTagDto';
import { TagDto } from './TagDto';

export class Tag {
  constructor(public id: number, public name: string, articles?: Article[]) {}

  public static fromDto(tagDto: TagDto): Tag {
    return new Tag(tagDto.id, tagDto.name);
  }

  public toDto(): TagDto {
    return {
      id: this.id,
      name: this.name,
    };
  }

  public toNewDto(): SetNewTagDto {
    return {
      name: this.name,
    };
  }
}
