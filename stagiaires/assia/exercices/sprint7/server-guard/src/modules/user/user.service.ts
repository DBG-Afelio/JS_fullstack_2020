import {
  BadRequestException,
  ImATeapotException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user-dto';
import { UsersEntity } from './entities/users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepo: Repository<UsersEntity>,
  ) {}

  async getAll(): Promise<UsersEntity[]> {
    const list: UsersEntity[] = await this.usersRepo.find().catch(error => {
      throw new BadRequestException(error.message, error.name);
    });

    if (!list) {
      throw new NotFoundException(
        `Ooups, we're having trouble retrieving info`,
      );
    } else if (list.length === 0) {
      throw new ImATeapotException(
        `Huum.. pretty quiete here ! Seems like there's none in the db yet`,
      );
    }
    return list;
  }

  async getOne(userId: number): Promise<UsersEntity> {
    const user: UsersEntity = await this.usersRepo.findOne(userId);
    if (!user) {
      throw new NotFoundException(`Ooups, user ${userId} does not exist !`);
    } else {
      return user;
    }
  }

  async findByLogin(login: string): Promise<UsersEntity> {
    const all = await this.getAll();
    const found = all.find(
      (userScreened: UsersEntity) => userScreened.login === login,
    );
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async update(id: number, userUpdated: UpdateUserDto): Promise<UsersEntity> {
    const user: UsersEntity = await this.getOne(id);
    console.log(user);
    if (user) {
      let update: DeepPartial<UsersEntity> = await this.usersRepo.preload(
        userUpdated,
      );
      //      update.roles = userUpdated.roles;
      if (userUpdated.role) {
        update = { ...update, role: userUpdated.role };
      }
      return await this.usersRepo.save(update).catch(error => {
        throw new BadRequestException(error.message, error.name);
      });
    }
  }

  async delete(id: number): Promise<UsersEntity> {
    const user: UsersEntity = await this.getOne(id);
    if (user) {
      return await this.usersRepo.remove(user).catch(error => {
        throw new BadRequestException(error.message, error.name);
      });
    }
  }
}
