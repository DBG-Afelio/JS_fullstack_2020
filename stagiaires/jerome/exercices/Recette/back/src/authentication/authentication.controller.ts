import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { BasicGuard } from 'src/guards/basic.guard';
import { AuthenticationService } from './authentication.service';


@Controller('login')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}
  
  @UseGuards(BasicGuard)
  @Get()
  login(@Req() request) {
    return this.authenticationService.login(request.user);
  }
}
