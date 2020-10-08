import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { RolesEnum } from 'src/enum/roles.enum';
import { Roles } from 'src/guards/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { JwtAuthGuard } from 'src/passport/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user-dto';
import { UsersEntity } from './entities/users.entity';
import { UserService } from './user.service';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard) //RolesGuard
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Roles(RolesEnum.MASTER)
  @Get()
  getUserList(@Req() req): Promise<UsersEntity[]> {
    console.log('req.user from controller : ', req.user);
    return this.userService.getAll();
  }

  //  @Roles(RolesEnum.MASTER)
  @Get(':id')
  getUser(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND }),
    )
    id: number,
  ): Promise<UsersEntity> {
    return this.userService.getOne(id);
  }

  //  @Roles(RolesEnum.MASTER)
  @Patch(':id')
  updateUser(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND }),
    )
    id: number,
    @Body() upUser: UpdateUserDto,
  ): Promise<UsersEntity> {
    console.log('------from User CTRL, updated user received : ', upUser);
    return this.userService.update(id, upUser);
  }

  // @Roles(RolesEnum.MASTER)
  @Delete(':id')
  removeUser(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND }),
    )
    id: number,
  ): Promise<any> {
    return this.userService.delete(id);
  }
}
