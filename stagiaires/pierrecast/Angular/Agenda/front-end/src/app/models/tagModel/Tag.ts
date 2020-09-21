import { TagDto } from './TagDto';

export class Tag {
    constructor(
      public id: number,
      public name: string,
    ) {
        this.id = id;
        this.name = name;
    }

    public getId():number {
        return this.id;
    }
 
    public getTag():string {
        return this.name;
    }

    public static fromDto(tagDto: TagDto): Tag {
        return new Tag(
            tagDto.id, 
            tagDto.name, 
        );
    }

    public toDto(): TagDto {
        return {
            id: this.id,
            name: this.name,
        }
    }
}