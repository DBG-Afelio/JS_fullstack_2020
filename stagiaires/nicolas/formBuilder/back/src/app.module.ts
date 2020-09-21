import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SkillsModule } from './skills/skills.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [HttpModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'jujeniroso',
    database: 'Users',
    logging: false,
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  }),
  UsersModule, SkillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
