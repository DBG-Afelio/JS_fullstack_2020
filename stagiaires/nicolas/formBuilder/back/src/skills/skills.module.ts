import { Module } from '@nestjs/common';
import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';

@Module({
  controllers: [SkillsController],
  providers: [SkillsService]
})
export class SkillsModule {}
