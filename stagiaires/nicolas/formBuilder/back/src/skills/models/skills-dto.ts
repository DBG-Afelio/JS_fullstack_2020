import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { SkillEntity, Skills } from "src/entity/skill.entity";

export class SkillsDto {

    @IsNotEmpty()
    @IsNumber()
    id:number;
    
    @IsNotEmpty()
    @IsString()
    name:Skills;

    static toDto(skillEntity:SkillEntity):SkillsDto{

        const newDto = new SkillsDto();

        newDto.id = skillEntity.id;
        newDto.name = skillEntity.name;

    return newDto

    }

}
