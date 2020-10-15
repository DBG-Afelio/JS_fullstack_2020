import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { registerAs } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { UserGoogleDto } from 'src/user/dtos/user-google.dto';
import { UserRoleEnum } from 'src/user/entities/user-role.enum';
import { UserService } from 'src/user/user.service';
import { GoogleService } from './google.service';

@Controller('google')
export class GoogleController {
  constructor(
    private authService: AuthService,
    private userService: UserService
    ) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    let googleId = req.user.googleId; 

    // vérifier si un utilisateur est présent dans la base de données avec un googleId
    let user = await this.authService.validateGoogleUser(googleId); 
    if (!user) {
      //   insérer dans la base de données
      let createdUser = new UserGoogleDto ({
        email: req.user.email,
        username: req.user.lastName,
        google: googleId,
        roles: UserRoleEnum.USER,
      });
       
      user = await this.userService.subscribeByGoogle(createdUser);

    }

    let oToken = await this.authService.login(user);

    // renvoie googleId ou l'accessToken
    return `
    <html>
      <head></head>
      <body> 
        <script>
          window.opener.postMessage('${oToken.access_token}', 'http://localhost:4200/sign-in')
          window.close();
        </script>
      </body>
    </html>`;
  }
}

