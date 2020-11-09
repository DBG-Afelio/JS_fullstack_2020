import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { AddRoleDto } from './dto/add-role-dto';
import { UpdateRoleDto } from './dto/update-role-dto';
import { RoleEntity } from './entities/role.entity';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(
    private readonly roleService: RolesService
  ) {}
  
  @Get()
  public getRoleList(): Promise<RoleEntity[]> {
    return this.roleService.getAll();
  }

  @Get(':id')
  public getOneRole(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode : HttpStatus.NOT_FOUND })) id:number
  ): Promise<RoleEntity> {
    return this.roleService.getOne(id);
  }  

  @Post()
  public createUser(
    @Body() newRole: AddRoleDto): Promise<RoleEntity> {
      return this.roleService.addOne(newRole);
  }

  @Patch(':id')
  public updateRole(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode : HttpStatus.NOT_FOUND })) id:number,
    @Body() userToUpdate: UpdateRoleDto): Promise<RoleEntity> {
      return this.roleService.updateOne(id, userToUpdate);
  }

  @Delete(':id')
  public deleteRole(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode : HttpStatus.NOT_FOUND })) id: number): Promise<RoleEntity> {
      return this.roleService.deleteOne(id);
    }
}
