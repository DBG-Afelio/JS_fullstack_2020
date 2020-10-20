import { AuthenticationController } from './authentication.controller';
import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport/dist/passport.module';
import { Basic } from 'src/strategies/basic.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../authentication/constant';
import { JwtGuard } from '../guards/jwt.guard';
import { Jwt } from '../strategies/jwt.strategy';

@Module({
    imports: [UserModule,
         PassportModule,
         JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '6000s' },
      }),],
      exports:[JwtGuard],
    providers: [AuthenticationService,Basic,JwtGuard,Jwt],
    controllers:[AuthenticationController]
})
export class AuthenticationModule { }