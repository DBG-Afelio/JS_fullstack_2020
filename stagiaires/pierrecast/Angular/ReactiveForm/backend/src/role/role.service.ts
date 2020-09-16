import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddRoleDto } from './dtos/add-role.dto';
import { UpdateRoleDto } from './dtos/update-role.dto';
import { RoleEntity } from './entities/role.entity';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(RoleEntity)
        private roleRepository : Repository<RoleEntity>
    ) {

    }

    async getAllRoles(): Promise<RoleEntity[]> {
        return await this.roleRepository.find();
    }

    async getRoleById(id: number): Promise<RoleEntity> {
        return await this.roleRepository.findOne(id);
    }

    async addRole(role: AddRoleDto): Promise<RoleEntity> {
        return await this.roleRepository.save(role);
    }

    async updateRole(id: number, role: UpdateRoleDto): Promise<RoleEntity> {
        const newRole = await this.roleRepository.preload({
            id,
            ...role
        });
        if (!newRole) {
            throw new NotFoundException(`Nationalité ${id} inexistante`);
        }
        return await this.roleRepository.save(newRole);

    }

    async removeRole(id:number) {
        const roleToRemove = await this.roleRepository.findOne(id);
        if (!roleToRemove) {
            throw new NotFoundException(`Nationalité ${id} inexistante`);
        }
        this.roleRepository.remove(roleToRemove)
    }
}
