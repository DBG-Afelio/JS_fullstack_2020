import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportBasicGuard } from 'src/passport/passport-basic.guard';
import { CustomHttpResponseBody } from 'src/interfaces/customHttpResponseBody';
import { Messages } from 'src/enum/messages.enum';
import { CreateCredentialsDto } from '../user/dto/create-user-dto';
import { AuthGuard } from '@nestjs/passport';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}


  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
   // console.log('req', req);
  }

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.authService.googleLogin(req)
  }

  @Post('sign-up')
  async signUp(
    @Body() credentials: CreateCredentialsDto,
  ): Promise<CustomHttpResponseBody> {
    const body = await this.authService.register(credentials);
    return { body, customStatusCode: 201, message: Messages.SUBSCRIPTION_OK };
  }

  @UseGuards(PassportBasicGuard)
  @Get('sign-in')
  async signIn(@Req() req: any): Promise<CustomHttpResponseBody> {
    let token: { access_token: string } = null;
    if (req.user) {
      token = await this.authService.generateToken(req.user);
    }
    return {
      body: token,
      customStatusCode: 203,
      message: Messages.CONNECTION_OK,
    };
  }
}
