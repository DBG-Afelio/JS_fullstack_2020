import { TagDto } from './Dtos/TagDto/tag.dto';

export class Tag {

    constructor(
        public label:string
        
    ){}

    static fromDto(tagDto:TagDto):Tag{
        return new Tag(
            tagDto.label
        )
    }

    toDto(){
        return{
            label:this.label
        }
    }
}
