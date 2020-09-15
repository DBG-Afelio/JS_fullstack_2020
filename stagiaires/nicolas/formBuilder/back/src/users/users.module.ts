import { Module, HttpModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { IsCountry } from './validators/is-country';


@Module({
  imports:[HttpModule,TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [IsCountry,UsersService]
})
export class UsersModule {}
