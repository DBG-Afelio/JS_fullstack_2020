import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { NationalitiesController } from './nationalities/nationalities.controller';
import { NationalitiesModule } from './nationalities/nationalities.module';
import { NationalitiesService } from './nationalities/nationalities.service';

@Module({
  imports: [UsersModule, NationalitiesModule],
  controllers: [AppController, NationalitiesController],
  providers: [AppService, NationalitiesService],
})
export class AppModule {}
