import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { PassportBasicStrategy } from 'src/passport/passport-basic.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from 'src/passport/jwt.strategy';
import { UsersEntity } from '../user/entities/users.entity';
import { UserService } from '../user/user.service';
import { GoogleStrategy } from 'src/passport/google.strategy';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UsersEntity,
        ]),
        PassportModule.register({ defaultStrategy: 'google' }), // was 'basic'
        JwtModule.register({
            secret: jwtConstants.secret,
          signOptions: { expiresIn: '30000s' }
        }),
        
    ],
    providers: [AuthService, UserService, PassportBasicStrategy, JwtStrategy, GoogleStrategy],
    controllers: [AuthController]
})
export class AuthModule {}

