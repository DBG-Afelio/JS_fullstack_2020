import { Controller, Get } from '@nestjs/common';
import { SkillsDto } from './models/skills-dto';
import { SkillsService } from './skills.service';

@Controller('skills')
export class SkillsController {

    constructor(private readonly skillsService:SkillsService){}

@Get()
    getAllSkills(){

        return this.skillsService.getAllSkills()

    }

}
