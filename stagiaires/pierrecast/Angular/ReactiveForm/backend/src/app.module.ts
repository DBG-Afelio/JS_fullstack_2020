import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { UserModule } from './user/user.module';
import { NationalityModule } from './nationality/nationality.module';
import { RoleModule } from './role/role.module';

dotenv.config();
@Module({
  imports: [
    

    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    NationalityModule,
    RoleModule
  ],
  controllers: [
    AppController   
  ],
  providers: [
    AppService
  ],
})
export class AppModule {
  constructor() {

  }
}
