import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService) {}


  @Get()
  getHello(): string {
    console.log('PORT de l\'application : ', this.configService.get('APP_PORT'));
    return this.appService.getHello();
  }
}
