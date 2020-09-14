import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [UsersModule, SkillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
