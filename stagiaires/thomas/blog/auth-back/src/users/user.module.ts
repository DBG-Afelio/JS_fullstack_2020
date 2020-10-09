import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import * as dotenv from 'dotenv';
// import { JwtStrategy } from './strategy/passport-jwt.strategy';
import { Basic } from './strategy/basic.strategy';


dotenv.config()

@Module({
    imports: [
            TypeOrmModule.forFeature([UserEntity]),

            /* --- PASSPORT BASIC  --- */ 

            PassportModule.register(
            {
                defaultStrategy: 'basic'
            }),

            /* --- PASSPORT JWT  --- */ 

            /* PassportModule.register(
            {
                defaultStrategy: 'jwt'
            }), */ 

            JwtModule.register({
                secret: process.env.SECRET,
                signOptions: {
                    expiresIn: 3600 
                }
            })
        ],
    controllers: [UserController],
    // BASIC STRATEGY
    providers: [UserService, Basic],
    exports: [UserService]
}) 
export class UserModule {}
