import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { Basic } from 'src/passport/passport-basic.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'basic' })],
  providers: [AuthService, Basic],
  controllers: [AuthController],
})
export class AuthModule {}
