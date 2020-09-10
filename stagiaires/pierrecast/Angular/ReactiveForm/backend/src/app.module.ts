import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { NationalitiesController } from './nationalities/nationalities.controller';
import { NationalitiesModule } from './nationalities/nationalities.module';
import { NationalitiesService } from './nationalities/nationalities.service';
import { RolesController } from './roles/roles.controller';
import { RolesModule } from './roles/roles.module';
import { RolesService } from './roles/roles.service';

@Module({
  imports: [UsersModule, NationalitiesModule, RolesModule],
  controllers: [AppController, NationalitiesController, RolesController],
  providers: [AppService, NationalitiesService, RolesService],
})
export class AppModule {}
