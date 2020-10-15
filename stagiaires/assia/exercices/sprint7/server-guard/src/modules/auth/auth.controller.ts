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
import { MailService } from '../mail/mail.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private mailService: MailService) {}


  @Get('mail')
  async sendMail() {
    await this.mailService.pwdForgotEmail('tssid6@gmail.com');
    }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req): Promise<string> {
    const user = await this.authService.googleAuth(req.user);
    const token = await this.authService.generateToken(user);
    const script: string = `
    <html>
      <head></head>
      <body>
        <script>
          window.opener.postMessage('${token.access_token}', 'http://localhost:4200/authentication/signin');
          window.close();
        </script>
      </body>
    </html>`;
    return script;
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
