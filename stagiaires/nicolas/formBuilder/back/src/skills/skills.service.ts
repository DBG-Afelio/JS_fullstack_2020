import { Injectable } from '@nestjs/common';
import { SkillsDto } from './models/skills-dto';
import { pool } from 'src/pool';

@Injectable()
export class SkillsService {

    async getAllSkills():Promise<SkillsDto[]>{

        const result = await pool.query('SELECT * from Skills')

        return result.rows

    }

}
