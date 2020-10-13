import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolesEntity } from './entity/roles.entity';
import { RoleDto } from './rolesDto/rolesDto';

@Injectable()
export class RolesService {
    constructor(@InjectRepository(RolesEntity)
    private RoleRepositry  :  Repository<RolesEntity> ){

    }
    async getAllRoles(): Promise<RolesEntity[]>{
        return await this.RoleRepositry.find();
    }
    async getRoleById(id: number ) : Promise<RolesEntity>  {
        return await this.RoleRepositry.findOne(id)
    }
    async deleteRole(id : number) {
        const role = await this.RoleRepositry.findOne(id);
        return await this.RoleRepositry.remove(role)
    }
    async addRole(roleDto : RoleDto) {
        return await this.RoleRepositry.save(roleDto) ;
    }
    async updateRole(id : number , role : RoleDto ){
        const  updateRole = await this.RoleRepositry.preload({  // With (preload) We will get the role using it's id and then update  it  
        id ,
        ...role  
      })//verifying whether the role we are targeting exist or not
            if(!updateRole){
                throw new NotFoundException(`Le role avece le id :${id} n'existe pas `);
    }
        return await this.RoleRepositry.save(updateRole);
    } 
}
