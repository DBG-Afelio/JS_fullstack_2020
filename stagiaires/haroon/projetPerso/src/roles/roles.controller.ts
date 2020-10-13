import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { RolesEntity } from './entity/roles.entity';
import { RolesService } from './roles.service';
import { RoleDto } from './rolesDto/rolesDto';

@Controller('roles')
export class RolesController {
    
    constructor(private readonly roleService : RolesService){}
    @Get()
    getAllRoles(): Promise<RolesEntity[]> {
        return this.roleService.getAllRoles();
    }
    @Get(':id')
    async getRoleById(
        @Param('id', ParseIntPipe)id:number) :Promise<RolesEntity>{
        return await this.roleService.getRoleById(id)   
  }
    @Post()
    async addRole(@Body() roleDto: RoleDto): Promise<RolesEntity> {
        console.log(roleDto);
        return await this.roleService.addRole(roleDto);


    }
    @Delete(':id')
    deleteRole(@Param('id', ParseIntPipe) id: number) {
        return this.roleService.deleteRole(id);
    }
    @Patch(':id')
    async updateRole(
    @Body() updateRole:RoleDto,
    @Param('id',ParseIntPipe)id:number){
        return await this.roleService.updateRole(id , updateRole );
    }

}
