import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AddRoleDto } from './dtos/add-role.dto';
import { UpdateRoleDto } from './dtos/update-role.dto';
import { RoleEntity } from './entities/role.entity';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
    constructor(
        private roleService: RoleService
    ) {

    }

    @Get(':id')
    async getRoleById(
        @Param('id', ParseIntPipe) id: number
    ): Promise<RoleEntity> {
        return await this.roleService.getRoleById(id);
    }

    @Get()
    async getAllRoles(): Promise<RoleEntity[]> {
        return await this.roleService.getAllRoles();
    }

    @Post()
    async addRole(
       @Body() addRoleDto: AddRoleDto
    ): Promise<RoleEntity> {
        return await this.roleService.addRole(addRoleDto);
    }

    @Patch(':id')
    async updateRole(
       @Body() updateRoleDto: UpdateRoleDto,
       @Param('id', ParseIntPipe) id :number
    ): Promise<RoleEntity> {
        return await this.roleService.updateRole(id, updateRoleDto);
    }

    @Delete(':id')
    async removeRole(
        @Param('id', ParseIntPipe) id :number
    ) {
        return this.roleService.removeRole(id);
    }
}
