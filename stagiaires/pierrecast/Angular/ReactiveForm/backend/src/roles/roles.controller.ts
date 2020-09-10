import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { RoleDto } from './dtos/roleDto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) { }

    @Get(':id') 
    public async findOne(@Param('id', new ParseIntPipe(
        { errorHttpStatusCode: HttpStatus.NOT_FOUND })) id: string) {
        return this.rolesService.findOne(id).then(role => role.toDto());
    }

    @Get()
    public async findAll(): Promise<RoleDto[]> {
        return this.rolesService.findAll().then(roles => roles.map(role => role.toDto()));
    }

   /* @Post()
    public async createRole(@Body() newRole: CreateRoleDto) {
        console.log('newRole', newRole);
        this.rolesService.create(newRole);
    }

    @Patch(':id')
    public async updateRole(@Param('id', ParseIntPipe) id: string, @Body() role: CreateRoleDto) {
        return this.rolesService.update(id, role);
    }

    @Delete(':id') 
    public async deleteToDo(@Param('id', ParseIntPipe) id: string) {
        return this.rolesService.delete(id);
    }*/
}
