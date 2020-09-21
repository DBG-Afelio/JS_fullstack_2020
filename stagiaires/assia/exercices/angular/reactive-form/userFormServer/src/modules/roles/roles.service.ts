import { BadRequestException, ImATeapotException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { AddRoleDto } from './dto/add-role-dto';
import { UpdateRoleDto } from './dto/update-role-dto';
import { RoleEntity } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RoleEntity)
    private rolesRepository: Repository<RoleEntity>
  ) {}

  async getAll(): Promise<RoleEntity[]> {
    const list: RoleEntity[] = await this.rolesRepository.find().catch((error) => {
      throw new BadRequestException(error.message, error.name);
    });

    if(list.length === 0){
        throw new ImATeapotException(`Humm.. Pretty quiete here ! Seems like no role could be found. Make sure you add some in your db`)
    } else if(!list) {
      throw new NotFoundException(`Oups ! Seems like we're having trouble retrieving roles`);
    }
    return list;
  }

  async getOne(roleId: number): Promise<RoleEntity> {
    const role: RoleEntity = await this.rolesRepository.findOne(roleId);
    if(!role){
      throw new NotFoundException(`Oups ! role with id ${roleId} could not be found !`);
    } else {
      return role;
    }
  }

  async addOne(role: AddRoleDto): Promise<RoleEntity> {
    return await this.rolesRepository.save(role)
    .catch((error) => {
      throw new BadRequestException(error.message, error.name);
    });
  }

  async updateOne(id: number, role: UpdateRoleDto): Promise<RoleEntity> {
    const update = await this.getOne(id);
    if (role){
      const updated = await this.rolesRepository.preload(role);
      return await this.rolesRepository.save(updated)
      .catch((error) => {
        throw new BadRequestException(error.message, error.name);
      });
    }
  }

  async deleteOne(id: number): Promise<RoleEntity> {
    const del = await this.getOne(id);
    if (del) {
      return await this.rolesRepository.remove(del)
      .catch((error) => {
        throw new BadRequestException(error.message, error.name);
      });
    }
  }

}
