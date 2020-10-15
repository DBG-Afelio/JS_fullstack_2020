import { Module } from '@nestjs/common';
import { GoogleStrategy } from 'src/strategies/google.strategy';
import { GoogleService } from './google.service';
import { GoogleController} from './google.controller';
import { AuthService } from 'src/auth/auth.service';
import { AuthorController } from 'src/author/author.controller';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[UserModule, AuthModule],
  controllers: [GoogleController],
  providers: [GoogleService, GoogleStrategy]
})
export class GoogleModule {}
