import { Module } from '@nestjs/common';
import { BasicStrat } from 'src/passeport/passport-basic.strategy';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from 'src/passeport/passport-jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService, BasicStrat, JwtStrategy],
  imports: [UserModule, 
    
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: 3600
      }
    })],
  exports:[JwtStrategy, AuthService]
})
export class AuthModule {}
