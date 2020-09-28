import { Controller, Get, Body, Req, UseGuards, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BasicAuthGuard } from 'src/passport/passport-basic.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  subscribe(@Body('username') username, @Body('password') password) {
    this.authService.register(username, password);
  }

  @UseGuards(BasicAuthGuard)
  @Get('login')
  login(@Req() req) {
    return req.user;
  }
}
