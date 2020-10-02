import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UsersEntity,
        ]),
    ],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
