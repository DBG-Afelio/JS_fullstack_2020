import { Module, HttpModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports:[HttpModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
