import { Injectable } from '@nestjs/common';
import { SkillsDto } from './models/skills-dto';
import { pool } from 'src/pool';
import { InjectRepository } from '@nestjs/typeorm';
import { SkillEntity } from 'src/entity/skill.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SkillsService {

    constructor(

        @InjectRepository(SkillEntity)
        private skillsRepository: Repository<SkillEntity>,

    ){}

    async getAllSkills():Promise<SkillsDto[]>{

        const allSkills = await this.skillsRepository.find()
        return allSkills.map(skill => SkillsDto.toDto(skill))

    }


}
